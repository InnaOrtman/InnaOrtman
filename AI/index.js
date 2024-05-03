import { process } from '/env'
import { Configuration, OpenAIApi } from 'openai'

const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

document.getElementById("send-btn").addEventListener("click", () => {
  const setupTextarea = document.getElementById('setup-textarea')
  if (setupTextarea.value) {
    const userInput = setupTextarea.value
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    movieBossText.innerText = "Alright, let's give my digital brain a moment to work its magic! Get ready for some inspiring insights!"
    fetchBotReply(userInput)
    fetchGuidance(userInput)
  }
})

async function fetchBotReply(outline) {
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `Generate a short inspiring message to say an outline sounds interesting and that you need some minutes to think about it.
    outline: ${outline}
    message: 
    `,
    max_tokens: 40 
  })
  movieBossText.innerText = response.data.choices[0].text.trim()
} 

async function fetchGuidance(outline) {
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `Generate an engaging, professional, motivating and inspiring guidance based on an outline. The guidance should include advice for people in difficult situations, drawn from quotes in the Bible. 
    ###
    outline: A big-headed daredevil fighter pilot goes back to school only to be sent on a deadly mission.
    guidance: In times of peril, remember the words of Proverbs 3:5-6: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." As Maverick (Tom Cruise) embarks on his dangerous mission, he must rely on faith and wisdom to navigate through the challenges ahead.
    ###
    outline: ${outline}
    guidance: 
    `,
    max_tokens: 200
  })
  const guidance = response.data.choices[0].text.trim()
  document.getElementById('output-text').innerText = guidance
  fetchTitle(guidance)
}

async function fetchTitle(guidance) {
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `Generate a catchy title for this guidance that reflects the biblical advice given: ${guidance}`,
    max_tokens: 25,
    temperature: 0.7
  })
  const title = response.data.choices[0].text.trim()
  document.getElementById('output-title').innerText = title
  fetchImagePrompt(title, guidance)
}

async function fetchImagePrompt(title, guidance){
  const response = await openai.createCompletion({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `Generate an inspiring image for the application of biblical advice use a picturesque image of angels of flowers and beautiful landscapes. There should be no text in this image.
    ###
    title: ${title}
    guidance: ${guidance}
    image description: 
    `,
    temperature: 0.8,
    max_tokens: 100
  })
  fetchImageUrl(response.data.choices[0].text.trim())
}

async function fetchImageUrl(imagePrompt){
  const response = await openai.createImage({
    prompt: `${imagePrompt}. There should be no text in this image.`,
    n: 1,
    size: '256x256',
    response_format: 'b64_json' 
  })
  document.getElementById('output-img-container').innerHTML = `<img src="data:image/png;base64,${response.data.data[0].b64_json}">`
  setupInputContainer.innerHTML = `<button id="view-pitch-btn" class="view-pitch-btn">View Guidance</button>`
  document.getElementById('view-pitch-btn').addEventListener('click', ()=>{
    document.getElementById('setup-container').style.display = 'none'
    document.getElementById('output-container').style.display = 'flex'
    movieBossText.innerText = `This idea is so good I'm jealous! It's gonna make you rich for sure! Remember, I want 10% 💰`
  })
}
