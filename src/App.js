import "./App.css";
import Sum from "./components/sum_component";
import Welcome from "./components/welcome_component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>react website.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Welcome name="hello"></Welcome>
      <Welcome name="hello1"></Welcome>

      <Welcome name="hello2"></Welcome>
      <Welcome name="hello3"></Welcome>
      <Sum a="2" b="3"></Sum>
    </div>
  );
}

export default App;
