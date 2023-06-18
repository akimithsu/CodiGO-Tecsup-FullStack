const PokemonContainer = document.querySelector("#row-pokemons")


const obtenerPokemones= async()=>{
    const response=await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await response.json();

    console.log(data.results)

}
