import "./App.css";
import Welcome from "./Lessons/classProps";
import People from "./Lessons/functionalProps";

function App() {
  return (
    <div className="App">
      <People name="Lilian">
        <button>Submit</button>
      </People>
      <Welcome name="Mathu">
        <button>Click me!</button>
      </Welcome>
    </div>
  );
}

export default App;
