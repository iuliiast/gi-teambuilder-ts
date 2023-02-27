import { useState } from "react";
import "./Card.css";

export let userCharactersNames: string[] = [];

function AddCard(name: string) {
	if (!userCharactersNames.includes(name)) {
		userCharactersNames.push(name);
		console.log("userCharactersNames:", userCharactersNames);
	} else {
		userCharactersNames = userCharactersNames.filter((char) => char !== name);
		console.log(userCharactersNames);
	}
}

export default function Card(props: any) {
	const [isActive, setIsActive] = useState(false);
	const handleClick = () => setIsActive((current) => !current);
	return (
		<div
			className={`card ${isActive ? "card-clicked" : "card-unclicked"}`}
			onClick={() => {
				handleClick();
				AddCard(props.name);
			}}
		>
			<img
				src={`../images/${props.name}.png`}
				alt="character-pic"
				className="card-pic"
			/>
			<p className="card-name">{props.name}</p>
		</div>
	);
}
