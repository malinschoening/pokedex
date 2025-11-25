import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonByName } from "../api/pokeapi";
import type { Pokemon } from "../types/pokemon";
import Loading from "../components/Loading";

const PokemonPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    fetchPokemonByName(name)
      .then((data) => setPokemon(data))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) return <Loading />;

  if (!pokemon) return <p>Pokémon not found.</p>;

  return (
    <div className="container my-4">
      <h2 className="text-capitalize mb-3">{pokemon.name}</h2>

      <div className="row">
        <div className="col-md-4">
          <img
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name} sprite`}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h5>Stats</h5>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>

          <h5>Types</h5>
          <ul className="d-flex gap-2">
            {pokemon.types.map((t) => (
              <li key={t.type.name} className="badge bg-primary text-capitalize">
                {t.type.name}
              </li>
            ))}
          </ul>

          <h5>Abilities</h5>
          <ul>
            {pokemon.abilities.map((ab) => (
              <li key={ab.ability.name} className="text-capitalize">
                {ab.ability.name}
              </li>
            ))}
          </ul>

          <h5>Weight & Height</h5>
          <p>
            Weight: {pokemon.weight} | Height: {pokemon.height}
          </p>

          <h5>Moves</h5>
          <ul className="list-inline">
            {pokemon.moves.slice(0, 10).map((move) => (
              <li key={move.move.name} className="list-inline-item badge bg-secondary text-capitalize m-1">
                {move.move.name}
              </li>
            ))}
            {pokemon.moves.length > 10 && <li>…and more</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
