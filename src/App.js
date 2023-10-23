import logo from './logo.svg';
import './App.css';

function showAlert() {
  alert("OK");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          KS latest
        </a>
        <button onClick={showAlert} style={{ background: 'cyan', width: '150px' }} >OK</button>
      </header>
    </div>
  );
}

export default App;
