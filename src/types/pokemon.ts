export interface Pokemon {
	id: number;
	name: string;
	sprites: { front_default: string };
	types: { type: { name: string } }[];
	abilities: { ability: { name: string } }[];
	stats: { base_stat: number; stat: { name: string } }[];
}

export interface PokemonSummary {
	pokemon: { name: string; url: string };
}
