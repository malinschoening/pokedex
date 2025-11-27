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
						className="list-group-item d-flex gap-2 justify-content-between align-items-center"
					>
						<span className="d-flex align-items-center gap-2 whitespace-nowrap">
							{stat?.icon && <stat.icon size={18} />}
							{stat?.label || s.stat.name}
						</span>
						<div className="progress-bar">
							<div className="progress-value" style={{ width: `${s.base_stat}%`}}></div>
						</div>
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
					className="badge text-white text-capitalize"
					style={{ backgroundColor: abilityBadgeColor }}
				>
					{ab.ability.name}
					{ab.is_hidden ? " (Hidden)" : ""}
				</span>
			))}
		</div>
	);

	const SizeContent = () => (
		<p className="mb-0 text-center text-md-start">
			<strong>Weight:</strong> {pokemon.weight} | <strong>Height:</strong> {pokemon.height}
		</p>
	);

	const MovesContent = () => (
		<div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
			{pokemon.moves.map((move) => (
				<span
					key={move.move.name}
					className="badge text-white text-capitalize"
					style={{ backgroundColor: moveBadgeColor }}
				>
					{move.move.name}
				</span>
			))}
		</div>
	);

	return (
		<div
			className="min-vh-100 pb-3 texture-lines d-flex flex-column"
			style={{ backgroundColor: typeColors[mainType], transition: "background-color 0.5s", marginTop: "-60px", paddingTop: "60px"}}
		>
			<div className="container d-flex flex-column flex-grow-1" style={{ marginBottom: "60px" }}>
				<div className="d-flex justify-content-between mb-4 text-white">
					<span>
						<h2 className="text-capitalize text-white">{pokemon.name}</h2>
						<div className="d-flex gap-2 flex-wrap">
							{pokemon.types.map((t) => (
								<span
									key={t.type.name}
									className="badge rounded-pill text-capitalize text-white"
									style={{
										backgroundColor: typeColors[t.type.name] || "#888",
										minWidth: 70
									}}
								>
									{t.type.name}
								</span>
							))}
						</div>
					</span>
					<span className="fw-bold fs-6" style={{ marginBottom: "5.5rem" }}>
						#{pokemon.id.toString().padStart(3, "0")}
					</span>
				</div>

				<div className="card flex-grow-1 rounded-xl shadow-lg position-relative overflow-visible h-100">
					<div className="position-relative d-flex justify-content-center" style={{ marginTop: "-6rem" }}>
						{TypeIcon && (
							<TypeIcon
								className="position-absolute"
								style={{
									width: "120px",
									height: "120px",
									top: "20%",
									left: "50%",
									transform: "translate(-50%, -50%)",
									opacity: 0.05,
									color: "black",
									zIndex: 0
								}}
							/>
						)}
						<div className="relative" style={{ width: 150, height: 150, zIndex: 2 }}>
							<PokemonSpriteFlip
								front={pokemon.sprites.front_default}
								back={pokemon.sprites.back_default || ""}
								alt={pokemon.name}
								className="w-100 h-100"
								flipInterval={3000}
							/>
						</div>
					</div>
					<div className="card-body pt-0 text-center text-md-start">
						<div className="tabs-wrapper mb-3 d-md-none">
							<ul className="nav nav-tabs border-0 custom-tabs flex-nowrap overflow-hidden">
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
