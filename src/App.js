import Navbar from "./Navbar";
import Homepage from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
