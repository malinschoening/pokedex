export interface Pokemon {
	id: number;
	name: string;
	height: number;
	weight: number;
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
	abilities: {
		ability: {
			name: string;
			url: string;
		};
		is_hidden: boolean;
		slot: number;
	}[];
	stats: {
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		};
	}[];
	sprites: {
		front_default: string;
		back_default?: string;
		other?: {
			"official-artwork"?: {
				front_default: string;
			};
		};
	};
	moves: {
		move: {
			name: string;
			url: string;
		};
		version_group_details: any[];
	}[];
}

export interface PokemonSummary {
	pokemon: { name: string; url: string };
}
