import './App.css';
import './principal.css'
import SearchBox from './components/SearchBox';
import banner from './img/banner3.jpg'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='banner'>
          <img className='imgBanner' src={banner} alt='banner'/>
        </div>

        <SearchBox />
      </header>
    </div>
  );
}

export default App;
