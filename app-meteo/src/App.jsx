import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DettaglioMeteo from "./pages/DettaglioMeteo";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dettaglio/:citta" element={<DettaglioMeteo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
