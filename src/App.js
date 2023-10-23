import logo from './logo.svg';
import './App.css';

function showAlert() {
  alert("OK");
  /*const para = document.createElement("p")
  para.textContent = "Test jenkins"
  document.getElementById("paras").appendChild(para)*/
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
          React App
        </a>
        <button onClick={showAlert} style={{ background: 'cyan', width: '150px', height: '50px', margin: '10px', border: 'none', borderRadius: '5px' }} >OK</button>
        <div id='paras'></div>
      </header>
    </div>
  );
}

export default App;
