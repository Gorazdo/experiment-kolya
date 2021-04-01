import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Experimental React App</p>
        <a
          className="App-link"
          href="https://github.com/cocakolya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kolya
        </a>
      </header>
    </div>
  );
}

export default App;
