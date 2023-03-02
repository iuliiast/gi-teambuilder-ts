import { useState } from "react";
import "./Card.css";

export default function Card({
	name,
	onClick,
}: {
	name: string;
	onClick: () => void;
}) {
	const [isActive, setIsActive] = useState(false);
	const handleClick = () => setIsActive((current) => !current);
	return (
		<div onClick={handleClick}>
			<div
				onClick={onClick}
				className={`card ${isActive ? "card-clicked" : "card-unclicked"}`}
			>
				<img
					src={`../images/${name}.png`}
					alt="character-pic"
					className="card-pic"
				/>
				<p className="card-name">{name}</p>
			</div>
		</div>
	);
}
