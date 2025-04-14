import axios from 'axios'
import { parseGptToLayout } from '../utils/layoutTools'

const OPENAI_KEY = 'sk-REPLACE_ME'

export async function askGpt(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.6
    }, {
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`
      }
    })

    const raw = response.data.choices[0].message.content
    return parseGptToLayout(JSON.parse(raw))
  } catch (error) {
    console.error('GPT request failed:', error)
    return []
  }
}
