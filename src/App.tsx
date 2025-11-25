import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/pokemon/:name" element={<IndexPage />} />
			<Route path="/type/:typeName" element={<IndexPage />} />
		</Routes>
	);
};

export default App;
