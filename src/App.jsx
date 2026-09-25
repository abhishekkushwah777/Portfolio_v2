import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import CustomCursor from "./Components/cursor";

function App() {
  return (
    <>
    <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;