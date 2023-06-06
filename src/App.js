import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Routers/Home";
import Navbar from "./components/Navbar/Navbar"
import Location from "./components/Routers/Location"
import About from "./components/Routers/About"
import Characters from "./components/Routers/Characters";
import CardDetails from "./components/Cards/CardDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/characters/:id" element={<CardDetails />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>

    </Router>
  );
}

export default App