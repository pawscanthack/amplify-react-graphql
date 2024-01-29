import logo from './logo.svg';
import image from './images/peaceful_rick.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Hey Hacker, meet React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React is fun!
        </a>
      </header>
    </div>
  );
}

export default App;
