import "./styles/global/App.css";
import Homepage from "./pages/Homepage";
import Context from "./Context.js";
import Nav from "./components/global/Nav";
function App() {
  return (
    <>
      <Context>
        <div className="App">
          <Nav
            mode={"game"}
            game={{
              id: "3Afq22",
              title: "Panthi's drawing lab || drawing comp.",
            }}
          />
          <Homepage />
        </div>
      </Context>
    </>
  );
}

export default App;
