import { useState, useEffect } from "react";
import { getDataFromPokemon } from "../../service";

import React from "react";

const Pokemon = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";

  const [pokemons, setPokemon] = useState([]);

  const fetchPokemonList = async () => {
    const listPokemones = await getDataFromPokemon();
    console.log("lista pokemones", listPokemones.results);
    setPokemon(listPokemones.results)
  };

useEffect(()=>{
    fetchPokemonList()
},[])

  return <div>
    <h1>Pokemons</h1>  
  </div>
};

export default Pokemon;
