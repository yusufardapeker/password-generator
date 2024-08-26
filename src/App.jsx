import "./styles/reset.css";
import "./styles/style.scss";

import Result from "./components/Result";
import Geneator from "./components/Generator";

function App() {
	return (
		<div className="container">
			<Result />
			<Geneator />
		</div>
	);
}

export default App;
