import logo from './logo.svg';
import image from './images/peaceful_rick.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Wubba Lubba Dub-Dub!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React is fun!
        </a>
        <p>Red Ninja was here</p>
      </header>
    </div>
  );
}

export default App;
