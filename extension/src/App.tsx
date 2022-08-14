import logo from "./logo.svg";
import "./App.css";
import * as AssetsService from "./services/assets-service";
import ClickListener from "./components/click-listener";
import { constants } from "./services/constants";


function App() {

  return (
    <div className="App">
      <ClickListener {...constants} ></ClickListener>
      <header className="App-header">
        <img
          src={AssetsService.getResourceURL(logo)}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
