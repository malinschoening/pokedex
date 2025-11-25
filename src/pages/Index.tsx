import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import PokemonCard from "../components/PokemonCard";
import type { Pokemon } from "../types/pokemon";
import { fetchPokemonList } from "../api/pokeapi";
import Loading from "../components/Loading";

const IndexPage: React.FC = () => {
	const [pokemon, setPokemon] = useState<Pokemon[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadPokemon = async () => {
			setLoading(true);
			try {
				const data = await fetchPokemonList(50);
				setPokemon(data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		loadPokemon();
	}, []);

	return (
		<Layout>
			{loading ? (
				<Loading message="Loading Pokémon..." />
			) : (
				<div className="container mt-4" role="list" aria-label="List of Pokémon">
					<div className="row">
						{pokemon.map((p) => (
							<PokemonCard key={p.id} pokemon={p} />
						))}
					</div>
				</div>
			)}
		</Layout>
	);
};

export default IndexPage;
