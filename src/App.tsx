import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
