// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import fetch from 'node-fetch';


const handler = async (event) => {
  const fetchWeatherContent = async () => {
    try {
      const response = await fetch(
        'https://riksgransen.se/skidakning/snorapport-och-pistkarta/')
      console.log(2, response)

      const html = await response.text()
      console.log(3, html)
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const weatherDiv = doc.querySelector('.weather-content')
      return weatherDiv
    } catch (error) {
      console.error(error)
    }
  }
  try {
    return {
      statusCode: 200,
      body: fetchWeatherContent(),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
