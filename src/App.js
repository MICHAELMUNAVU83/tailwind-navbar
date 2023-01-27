import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <h1 className="text-4xl font-bold">Hello World</h1>
      <NavBar />
    </Router>
  );
}

export default App;
