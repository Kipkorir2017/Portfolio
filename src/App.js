import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/NavBar";

// Pages
import Home from "./pages/Home";
import Folio from "./pages/Folio";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-all">
        
        <Navbar />

        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/folio" element={<Folio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;