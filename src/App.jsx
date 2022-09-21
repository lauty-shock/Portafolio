import "./App.css";
import About from "./component/About/About";
import Inicio from "./component/Inicio/Inicio";
import Nav from "./component/Nav/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Inicio />
      <About />
    </div>
  );
}
