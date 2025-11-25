import React from "react";
import { Link } from "react-router-dom";
import type { Pokemon } from "../types/pokemon";

interface Props {
	pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
	return (
		<article className="col-md-3 mb-4" role="listitem">
			<Link to={`/pokemon/${pokemon.name}`} className="text-decoration-none" aria-label={`View details for ${pokemon.name}`}>
				<div className="card h-100 shadow-sm">
					<img
						src={pokemon.sprites.front_default}
						className="card-img-top img-fluid"
						alt={`Image of ${pokemon.name}`}
					/>

					<div className="card-body">
						<h2 className="card-title h5 text-capitalize">{pokemon.name}</h2>

						<p className="card-text mb-2">
							<strong>Type{pokemon.types.length > 1 ? "s" : ""}:</strong>{" "}
							{pokemon.types.map((t) => t.type.name).join(", ")}
						</p>

						<p className="card-text mb-2">
							<strong>Abilities:</strong>{" "}
							{pokemon.abilities.map((a) => a.ability.name).join(", ")}
						</p>

						<ul className="list-unstyled mb-0">
							{pokemon.stats.map((s) => (
								<li key={s.stat.name}>
									<strong>{s.stat.name}:</strong> {s.base_stat}
								</li>
							))}
						</ul>
					</div>

					<div className="card-footer text-muted text-center">
						#{pokemon.id.toString().padStart(3, "0")}
					</div>
				</div>
			</Link>
		</article>
	);
};

export default PokemonCard;
