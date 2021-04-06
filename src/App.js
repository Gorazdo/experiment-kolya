import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { About } from "./About";
import { Profile } from "./Profile";
import { Error } from "./Error";

function App() {
  return (
    <HashRouter>
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
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/profile" component={Profile} />
              <Route path="*" component={Error} />
            </Switch>
          </div>
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
