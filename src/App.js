import logo from './riksgransen.png'
import './App.css'
import BusinessHours from './BusinessHours'
import Weather from './Weather'
import FetchHTML from './FetchHTML'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          THE BRIGHT SITE OF
        </p>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <body>
      <BusinessHours/>
      <Weather/>
      <FetchHTML/>
      </body>
    </div>

  )
}

export default App

