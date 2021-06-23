import background from './images/sky.jpg'
import './App.css';
import Search from './Search/Search'

function App() {

  return (
    <div className="App">
      <Search />
        <img src={background} alt="logo" className="background" />
    </div>
  );
}

export default App;
