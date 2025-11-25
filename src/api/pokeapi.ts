import type { Pokemon, PokemonSummary } from "../types/pokemon";

export const fetchPokemonList = async (limit = 50): Promise<Pokemon[]> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
	const data = await res.json();
	return Promise.all(
		data.results.map(async (p: any) => {
			const r = await fetch(p.url);
			return await r.json();
		})
	);
};

export const fetchPokemonByName = async (name: string): Promise<Pokemon> => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	return await res.json();
};

export const fetchPokemonByType = async (typeName: string): Promise<PokemonSummary[]> => {
	const res = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
	const data = await res.json();
	return data.pokemon;
};
