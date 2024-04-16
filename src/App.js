import "./Style/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/accueil/Home";
import About from "./Pages/about/About";
import Error from "./Pages/error/Error";
import FichLogement from "./Pages/logements/FichLogement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/logements" element={<FichLogement />} />
      </Routes>
    </div>
  );
}

export default App;
