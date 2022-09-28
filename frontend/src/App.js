import "./styles/App.css";
import Homepage from "./pages/Homepage";
import Context from "./Context.js";
function App() {
  return (
    <>
      <Context>
        <div className="App">
          <Homepage />
        </div>
      </Context>
    </>
  );
}

export default App;
