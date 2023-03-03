import { useState, useMemo } from "react";
import characters from "../../data/characters";
import Card from "./Card";
import Results from "./Results";
import "./App.css";

export let userCharactersNames: any[] = [];
function App() {
	const [userCharacters, setCharacters] = useState(userCharactersNames);
	const [showResults, setShowResults] = useState(false);
	const childKey = "" + useMemo(Math.random, [userCharacters]);
	function addCard(name: any) {
		if (userCharacters && !userCharacters.includes(name)) {
			setCharacters((userCharacters) => [...userCharacters, name]);
			console.log("userCharacters", userCharacters);
		} else {
			setCharacters(userCharacters.filter((item) => item !== name));
			console.log(userCharacters);
		}
		return console.log(userCharacters);
	}

	function Loader() {
		const resultsEl = document.getElementById("results");
		if (userCharacters.length === 0) {
			alert(`You haven't chosen anyone.`);
		} else {
			setShowResults(true);
			resultsEl && resultsEl.scrollIntoView({ behavior: "smooth" });
		}
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
					<a
						onClick={() => Loader()}
						id="resultsBtn"
						href={(window.location.href = "#results")}
						className="results-btn"
					>
						Find results
					</a>
				</div>
				<div id="characters-el" className="characters">
					{characters.map((char) => (
						<Card
							key={char.id}
							name={char.name}
							onClick={() => {
								addCard(char.name);
							}}
						></Card>
					))}
				</div>
			</main>
			{showResults && <Results arr={userCharacters} key={childKey} />}
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
