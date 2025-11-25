import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PokemonPage from "./pages/PokemonPage";
import Layout from "./components/layout/Layout";
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Route>
    </Routes>
  );
}

export default App;
