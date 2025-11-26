import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonByName } from "../api/pokeapi";
import type { Pokemon } from "../types/pokemon";
import Loading from "../components/Loading";
import PokemonSpriteFlip from "../components/PokemonSpriteFlip";
import {
	typeColors,
	typeIcons,
	statInfo,
	moveBadgeColor,
	abilityBadgeColor
} from "../constants/config";

const PokemonPage: React.FC = () => {
	const { name } = useParams<{ name: string }>();
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState("stats");

	useEffect(() => {
		if (!name) return;
		setLoading(true);
		fetchPokemonByName(name)
			.then((data) => setPokemon(data))
			.finally(() => setLoading(false));
	}, [name]);

	if (loading) return <Loading />;
	if (!pokemon) return <p className="text-center my-5">Pokémon not found.</p>;

	const mainType = pokemon.types[0].type.name;
	const TypeIcon = typeIcons[mainType];

	const StatsContent = () => (
		<ul className="list-group list-group-flush">
			{pokemon.stats.map((s) => {
				const stat = statInfo[s.stat.name];
				return (
					<li
						key={s.stat.name}
						className="list-group-item d-flex justify-content-between align-items-center"
					>
						<span className="d-flex align-items-center gap-2">
							{stat?.icon && <stat.icon size={18} />}
							{stat?.label || s.stat.name}
						</span>
						<span>{s.base_stat}</span>
					</li>
				);
			})}
		</ul>
	);

	const SkillsContent = () => (
		<div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
			{pokemon.abilities.map((ab) => (
				<span
					key={ab.ability.name}
					className="badge text-capitalize"
					style={{ backgroundColor: abilityBadgeColor, color: "#fff" }}
				>
					{ab.ability.name}
					{ab.is_hidden ? " (Hidden)" : ""}
				</span>
			))}
		</div>
	);

	const SizeContent = () => (
		<p className="mb-0 text-center text-md-start">
			<strong>Wt:</strong> {pokemon.weight} | <strong>Ht:</strong> {pokemon.height}
		</p>
	);

	const MovesContent = () => (
		<div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
			{pokemon.moves.slice(0, 12).map((move) => (
				<span
					key={move.move.name}
					className="badge text-capitalize"
					style={{ backgroundColor: moveBadgeColor, color: "#fff" }}
				>
					{move.move.name}
				</span>
			))}
			{pokemon.moves.length > 12 && <span>…more</span>}
		</div>
	);

	return (
		<div
			className="min-vh-100 py-5 texture-lines"
			style={{ backgroundColor: typeColors[mainType], transition: "background-color 0.5s" }}
		>
			<div className="container">
				<div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
					<h2 className="text-capitalize mb-3 mb-md-0 text-white">{pokemon.name}</h2>
					<span className="badge bg-secondary p-2 fs-6" style={{ marginBottom: "5.5rem" }}>
						#{pokemon.id.toString().padStart(3, "0")}
					</span>
				</div>

				<div className="card mx-auto mx-md-0 shadow-lg position-relative overflow-visible">
					<div className="position-relative d-flex justify-content-center" style={{ marginTop: "-6rem" }}>
						{TypeIcon && (
							<TypeIcon
								className="position-absolute"
								style={{
									width: "120px",
									height: "120px",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									opacity: 0.1,
									color: "black",
									zIndex: 1
								}}
							/>
						)}
						<div style={{ width: 150, height: 150, zIndex: 2 }}>
							<PokemonSpriteFlip
								front={pokemon.sprites.front_default}
								back={pokemon.sprites.back_default || ""}
								alt={pokemon.name}
								className="w-100 h-100"
								flipInterval={3000}
							/>
						</div>
					</div>

					<div className="card-body text-center text-md-start">
						<div className="mb-3 d-flex justify-content-center justify-content-md-start gap-2 flex-wrap">
							{pokemon.types.map((t) => (
								<span
									key={t.type.name}
									className="badge rounded-pill text-capitalize"
									style={{
										backgroundColor: typeColors[t.type.name] || "#888",
										color: "#fff",
										minWidth: 70
									}}
								>
									{t.type.name}
								</span>
							))}
						</div>

						<div className="tabs-wrapper mb-3 d-md-none">
							<ul className="nav nav-tabs border-0 custom-tabs flex-nowrap overflow-auto">
								{["stats", "skills", "size", "moves"].map((tab) => (
									<li className="nav-item fs-7" key={tab}>
										<button
											className={`nav-link ${activeTab === tab ? "active text-foreground" : "text-secondary"}`}
											onClick={() => setActiveTab(tab)}
											style={{ whiteSpace: "nowrap" }}
										>
											{tab.charAt(0).toUpperCase() + tab.slice(1)}
										</button>
									</li>
								))}
							</ul>
						</div>

						<div className="tab-content d-md-none">
							{activeTab === "stats" && <StatsContent />}
							{activeTab === "skills" && <SkillsContent />}
							{activeTab === "size" && <SizeContent />}
							{activeTab === "moves" && <MovesContent />}
						</div>
						<div className="tab-content d-none d-md-block">
							<div className="row">
								<div className="col-md-7">
									<StatsContent />
									<SkillsContent />
								</div>
								<div className="col-md-5">
									<SizeContent />
									<MovesContent />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonPage;
