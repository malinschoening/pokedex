import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonByName } from "../api/pokeapi";
import type { Pokemon } from "../types/pokemon";
import Loading from "../components/Loading";
import PokemonSpriteFlip from "../components/PokemonSpriteFlip";
import { typeColors, typeIcons, statInfo, moveBadgeColor, abilityBadgeColor } from "../constants/config";

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
  if (!pokemon) return <p className="text-center my-5">Pokémon not found.</p>;

  const mainType = pokemon.types[0].type.name;
  const TypeIcon = typeIcons[mainType];

  return (
    <div className="container my-4">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
        <h2 className="text-capitalize mb-3 mb-md-0">{pokemon.name}</h2>
        <span className="badge bg-secondary p-2 fs-6">
          #{pokemon.id.toString().padStart(3, "0")}
        </span>
      </div>

      <div className="position-relative d-flex justify-content-center align-items-center mb-4">
        {TypeIcon && (
          <TypeIcon
            className="position-absolute"
            style={{
              width: "40%",
              height: "40%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.15,
              color: "white",
              zIndex: 1
            }}
          />
        )}

        <div
          className="w-50"
          style={{
            maxWidth: 200,
            minWidth: 120,
            aspectRatio: "1/1",
            position: "relative"
          }}
        >
          <PokemonSpriteFlip
            front={pokemon.sprites.front_default}
            back={pokemon.sprites.back_default || ""}
            alt={pokemon.name}
            className="w-100 h-100"
            flipInterval={2000}
          />
        </div>
      </div>

      <div className="mb-3 d-flex flex-wrap justify-content-center gap-2">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className="badge rounded-pill text-capitalize"
            style={{
              backgroundColor: typeColors[t.type.name] || "#888",
              color: "#fff",
              minWidth: 60
            }}
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <h5 className="mb-3">Stats</h5>
          <ul className="list-group list-group-flush">
            {pokemon.stats.map((s) => {
              const stat = statInfo[s.stat.name];
              return (
                <li
                  key={s.stat.name}
                  className="list-group-item d-flex align-items-center justify-content-between"
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
        </div>

        <div className="col-md-6">
          <h5 className="mb-2">Abilities</h5>
          <div className="mb-3 d-flex flex-wrap gap-2">
            {pokemon.abilities.map((ab) => (
              <span
                key={ab.ability.name}
                className="badge text-capitalize"
                style={{
                  backgroundColor: abilityBadgeColor,
                  color: "#fff"
                }}
              >
                {ab.ability.name}
                {ab.is_hidden ? " (Hidden)" : ""}
              </span>
            ))}
          </div>

          <h5 className="mb-2">Measurements</h5>
          <p>
            Weight: {pokemon.weight} | Height: {pokemon.height}
          </p>

          <h5 className="mb-2">Moves</h5>
          <div className="d-flex flex-wrap gap-2">
            {pokemon.moves.slice(0, 12).map((move) => (
              <span
                key={move.move.name}
                className="badge text-capitalize"
                style={{
                  backgroundColor: moveBadgeColor,
                  color: "#fff"
                }}
              >
                {move.move.name}
              </span>
            ))}
            {pokemon.moves.length > 12 && <span>…and more</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
