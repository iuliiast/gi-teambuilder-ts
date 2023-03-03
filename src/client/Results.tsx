import characters from "../../data/characters";
import { useState, useEffect } from "react";
let selectedCharacters = [];

function getFloorTeams(floor: any) {
	return (
		floor &&
		floor.map((team: any, index: number) => (
			<div className="team" key={index}>
				{team &&
					team.map((name: string, index: number) => (
						<div className="small-card" key={index}>
							<img src={`../images/${name}.png`} alt="char-pic" />
						</div>
					))}
			</div>
		))
	);
}

const isEmpty = (obj: any) => {
	return Object.keys(obj).every((key) => obj[key].length === 0);
};

export default function Results(arr: any) {
	const userCharactersNames = arr.arr;
	const [teams, setTeams] = useState<any>(null);
	const getResults = async () => {
		selectedCharacters = characters.filter((char) =>
			userCharactersNames.includes(char.name)
		);
		const data = selectedCharacters;
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		//Send data from client to the server
		const res = await fetch("/", options);
		//Send data from server to the client
		const json = await res.json();
		const userTeams = json.userTeams;
		setTeams(userTeams);
	};
	useEffect(() => {
		getResults();
	}, []);
	const userTeams: any = teams;
	const userTeams9a = userTeams ? userTeams.floor9_a : "";
	const userTeams9b = userTeams ? userTeams.floor9_b : "";
	const userTeams10a = userTeams ? userTeams.floor10_a : "";
	const userTeams10b = userTeams ? userTeams.floor10_b : "";
	const userTeams11a = userTeams ? userTeams.floor11_a : "";
	const userTeams11b = userTeams ? userTeams.floor11_b : "";
	const userTeams12a = userTeams ? userTeams.floor12_a : "";
	const userTeams12b = userTeams ? userTeams.floor12_b : "";

	return (
		<>
			<div id="results" className="container results section-visible">
				<div id="floor9" className="floor">
					<div id="chamber9-1" className="chamber">
						<h3>Floor 9 • First half</h3>
						<div id="list9-1" className="list">
							{getFloorTeams(userTeams9a)}
						</div>
					</div>
					<div id="chamber9-2" className="chamber">
						<h3>Floor 9 • Second half</h3>
						<div id="list9-2" className="list">
							{getFloorTeams(userTeams9b)}
						</div>
					</div>
				</div>

				<div id="floor10" className="floor">
					<div id="chamber10-1" className="chamber">
						<h3>Floor 10 • First half</h3>
						<div id="list10-1" className="list">
							{getFloorTeams(userTeams10a)}
						</div>
					</div>
					<div id="chamber10-2" className="chamber">
						<h3>Floor 10 • Second half</h3>
						<div id="list10-2" className="list">
							{getFloorTeams(userTeams10b)}
						</div>
					</div>
				</div>

				<div id="floor11" className="floor">
					<div id="chamber11-1" className="chamber">
						<h3>Floor 11 • First half</h3>
						<div id="list11-1" className="list">
							{getFloorTeams(userTeams11a)}
						</div>
					</div>
					<div id="chamber11-2" className="chamber">
						<h3>Floor 11 • Second half</h3>
						<div id="list11-2" className="list">
							{getFloorTeams(userTeams11b)}
						</div>
					</div>
				</div>

				<div id="floor12" className="floor">
					<div id="chamber12-1" className="chamber">
						<h3>Floor 12 • First half</h3>
						<div id="list12-1" className="list">
							{getFloorTeams(userTeams12a)}
						</div>
					</div>
					<div id="chamber12-2" className="chamber">
						<h3>Floor 12 • Second half</h3>
						<div id="list12-2" className="list">
							{getFloorTeams(userTeams12b)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
