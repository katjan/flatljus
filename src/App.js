import logo from './riksgransen.png';
import './App.css';

function App() {
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const Places = [
    { name: 'Lobbybar',  days:[0,1,2,3,4,5,6], opening: '12:00', closing: '23:00'},
    { name: 'Reception', days:[0,1,2,3,4,5,6], opening: '00:00', closing: '24:00'},
    { name: 'Sportshop', days:[0,1,2,3,4,5,6], opening: '08:30', closing: '17:00 alt. 18:00'},
    /**
    { name: 'GRÖNAN', days:[0,5,6], opening: '00:00', closing: '24:00'},
    { name: 'Reception', days:[0,1,2,3,4,5,6], opening: '00:00', closing: '24:00'},
    { name: 'Reception', days:[0,1,2,3,4,5,6], opening: '00:00', closing: '24:00'},
    { name: 'Reception', days:[0,1,2,3,4,5,6], opening: '00:00', closing: '24:00'},
    { name: 'Reception', days:[0,1,2,3,4,5,6], opening: '00:00', closing: '24:00'},
    { name: 'Reception', days:[0,1,2,3,4,5,6], opening: '00:00', closing: '24:00'},

    { name: 'Sportshop' },
    { name: 'GRÖNAN' },
    { name: 'SPA' },
    { name: 'Sportinfo' },
    { name: 'Läkarmottagningen' },
    { name: 'Rest. Lapplandia' },
    { name: 'Lappis' },
    { name: 'Meteorologen' },
    { name: 'Nordalsköket' },
    { name: 'Låktatjåkko' },
    { name: 'ICA' },
    { name: 'Niehku' },

     console.log(new Date().toLocaleString('en-us', {  weekday: 'long' }));

     var d=new Date();
     console.log(d.getDay());

     **/
  ];

  var opened = (data) => {
    const D1 = new Date();

    if (data.days.includes(D1.getDay())) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THE HACKED VERSION
        </p>
      </header>
      <div>
        <h1>OPEN TODAY</h1>
        {Places.map(data => (
          <p>{opened(data) ? data.name + ' ' + data.opening +' - '+ data.closing: ''}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

