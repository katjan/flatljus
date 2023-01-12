import logo from './riksgransen.png'
import './App.css'
import BusinessHours from './BusinessHours'
import Weather from './Weather'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          THE BRIGHT SITE OF
        </p>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <BusinessHours/>
      <Weather/>
    </div>

  )
}

export default App

