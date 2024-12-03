import React from "react";
import { useNavigate } from "react-router-dom";
import pokeColor from "../pages/pokeColor.jsx";
import "./CardPokemon.css";

const CardPokemon = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details", { state: { pokemon } });
  };
// getting the type to match color
  const primaryType = pokemon.types[0]?.type.name || "normal";
  const backgroundColor = pokeColor[primaryType] || "#f0f0f0";

  return (
    <div
      className="card-pokemon"
      onClick={handleClick}
      style={{ backgroundColor }}
    >
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
    </div>
  );
};

export default CardPokemon;
