import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import "./App.css";
import PokemonPage from "./pages/PokemonPage";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/pokemon/:name" element={<PokemonPage />} />
			<Route path="/type/:typeName" element={<IndexPage />} />
		</Routes>
	);
};

export default App;
