function SmallCard(props: any) {
	return (
		<div className="small-card">
			<img src={`../images/${props.name}.png`} alt="char-pic" />
		</div>
	);
}

export default function makeTeam(team: any) {
	return (
		<div className="team">
			{team.map((name: any) => {
				<SmallCard char={name} />;
			})}
		</div>
	);
}
