import React, { useState } from "react";
import { Link } from "react-router-dom";
import PokemonSpriteFlip from "./PokemonSpriteFlip";
import { typeIcons, typeColors } from "../constants/config";
import type { Pokemon } from "../types/pokemon";
import { Star } from "lucide-react";

interface Props {
	pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
	const mainType = pokemon.types[0].type.name;
	const TypeIcon = typeIcons[mainType] || Star;

	const [hovered, setHovered] = useState(false);

	return (
		<article className="col-6 col-sm-4 col-md-3 col-xl-2 mb-4" role="listitem">
			<Link
				to={`/pokemon/${pokemon.name}`}
				className="text-decoration-none"
				aria-label={`View details for ${pokemon.name}`}
			>
				<div
					className="card text-white h-100 shadow-sm overflow-hidden rounded-3 hover-shadow texture-lines"
					style={{ backgroundColor: typeColors[mainType], minHeight: "8rem" }}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<div className="card-body d-flex flex-column p-2 p-md-3 p-lg-4 pe-0 pe-md-0 pe-lg-0 pb-0 pb-md-0 pb-lg-0">
						<div className="w-100 d-flex justify-content-between align-items-start pe-2 pe-md-3 pe-lg-4">

							<h2 className="card-title h6 mb-0 text-capitalize">{pokemon.name}</h2>
							<span className="fw-bold fs-8 ms-auto">
								#{pokemon.id.toString().padStart(3, "0")}
							</span>
						</div>

						<div className="flex-grow-1 d-flex justify-content-between">
							<div className="d-flex flex-column justify-content-center align-items-start mt-2">
								{pokemon.types.map((t) => (
									<span
										key={t.type.name}
										className="badge text-white rounded-pill text-capitalize me-1 mb-1"
										style={{ backgroundColor: typeColors[t.type.name]}}
									>
										{t.type.name}
									</span>
								))}
							</div>
							<div className="d-flex justify-content-center mt-n4 w-100">
								<div className="position-relative w-100 h-100">
									<TypeIcon
										className="position-absolute top-50 start-50 translate-middle"
										style={{
											width: "90%",
											height: "90%",
											opacity: 0.1,
											zIndex: 1,
											color: "currentColor"
										}}
									/>
									<div className="position-absolute top-50 start-50 translate-middle w-100 h-100">
										<PokemonSpriteFlip
											front={pokemon.sprites.front_default}
											back={pokemon.sprites.back_default}
											alt={pokemon.name}
											flipped={hovered}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default PokemonCard;
