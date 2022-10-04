import "./App.css";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Inicio from "./component/Inicio/Inicio";
import Nav from "./component/Nav/Nav";
import Proyectos from "./component/Proyectos/Proyectos";

export default function App() {
  return (
    <div>
      <Nav />
      <Inicio />
      <About />
      <Proyectos />
      <Contact />
      <Footer />
    </div>
  );
}
