import logo from "./logo.svg";
import { Link } from "react-router-dom";
import InputComp from "./Components/InputComp";
import "./App.css";

function App() {
  const profiles = [1, 2, 3];

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
          Learn React
        </a>

        <div>
          <ul className="navbar">
            {profiles.map((profile) => (
              <li>
                <Link key={profile} to={"/profiles/" + profile}>
                  #{profile}
                </Link>
              </li>
            ))}
            <li>
              <Link key={1} to={"/profiles/1"}>
                Profile 1
              </Link>
            </li>
          </ul>
        </div>
        <InputComp />
      </header>
    </div>
  );
}

export default App;
