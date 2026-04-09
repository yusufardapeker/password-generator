import "./styles/reset.css";
import "./styles/style.css";

import Result from "./components/Result";
import Geneator from "./components/Generator";

function App() {
	return (
		<main>
			<div className="container">
				<Result />
				<Geneator />
			</div>
		</main>
	);
}

export default App;
