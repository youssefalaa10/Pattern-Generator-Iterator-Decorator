import Home from "./Home";
import "./App.css";
import Decorator from "./Decorator";

function App() {
  return (
    <div className="App">
      <Home />

    
            <Decorator content="This is a component with custom styles applied using PrimaryBg decorator." />
          
    </div>
  );
}

export default App;
