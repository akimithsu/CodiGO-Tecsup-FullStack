/// este componente sera nuestro container de api's

//una buena practica dentro de react es tener la URL del api en una variable

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

/// vamos a construir una funcion generic el cual se encargue de hacer las peticiones desde este nuevo component


export const getDataFromPokemon = async (url = BASE_URL)=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log("data",data)
        return data;
    }
    catch(error){
        console.log(error.message);
    }
}
export const CardList = props => (
    <div className='card-list'>
        {props.pokemons.map(pokemon =>(
        <Card key={pokemon.name} pokemon={pokemon}></Card>
        ))}
    </div>
);