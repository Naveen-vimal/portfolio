import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Tabs from "./Components/Tabs";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
         <Container>
      <Home />
      <About />
      <Projects />
      <Work />
      <Tabs />
   
      <Contact />
      
      </Container>
      <Footer />
    </div>
  );
}

export default App;
