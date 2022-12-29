import React, { useState, useEffect } from 'react'

const RiksgransenWeather = () => {
  const [weatherContent, setWeatherContent] = useState(null)

  useEffect(() => {
    console.log(1)
    const fetchWeatherContent = async () => {
      try {
        const response = await fetch(
          'https://riksgransen.se/skidakning/snorapport-och-pistkarta/',
          { mode: 'no-cors'})
        console.log(2, response)

        const html = await response.text()
        console.log(3, html)
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        const weatherDiv = doc.querySelector('.weather-content')
        setWeatherContent(weatherDiv)
      } catch (error) {
        console.error(error)
      }
    }

    fetchWeatherContent()
  }, [])

  if (!weatherContent) {
    return  <div>
      no no no
    </div>
  }

  return (
    <div>
      {React.cloneElement(weatherContent,
        { className: 'weather-content-container' })}
    </div>
  )
}

export default RiksgransenWeather