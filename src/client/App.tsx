import characters from "../../data/characters";
import Card from "./Card";
import { userCharactersNames } from "./Card";
import Results from "./Results";
import "./App.css";

function Loader() {
	if (userCharactersNames.length === 0) {
		alert(`You haven't chosen anyone.`);
	} else {
		return <Results />;
		// {
		// 	window.location.href = "#results";
		// }
	}
}

function App() {
	function handleClick() {
		return <Results />;
	}

	return (
		<div className="App">
			<main className="container">
				<div className="description">
					<h1>Build your Genshin Impact Team</h1>
					<p>
						Select characters that you have leveled up
						<br />
						and get the right teams
						<br />
						for Spiral Abyss (v2.0)
					</p>
					<p>
						Please note that a large number of popular characters for the Abyss
						can be heavy to load.
					</p>
					<button onClick={async () => Loader()} id="resultsBtn">
						Find results
					</button>
				</div>
				<div id="characters-el" className="characters">
					{characters.map((char) => (
						<Card key={char.id} name={char.name} />
					))}
				</div>
			</main>
			<button onClick={handleClick}>Results</button>
			<Results />
			<div className="footer">
				<p>
					This site is not affiliated with miHoYo Co., Ltd. (HoYoverse). Genshin
					Impact, game content and materials are trademarks and copyrights of
					miHoYo.
					<br />
					Data sourced from spiralabyss.org
				</p>
			</div>
		</div>
	);
}

export default App;
