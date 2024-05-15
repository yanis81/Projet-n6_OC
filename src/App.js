import "./Style/App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/accueil/Home";
import About from "./Pages/about/About";
import Error from "./Pages/error/Error";
import FichLogement from "./Pages/logements/FichLogement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} /> 
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
