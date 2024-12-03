// call functions to api

// get pokemons details
export function getPokemon({ url }) {
    return fetch(url).then((res) => res.json());
  }
  
  // get list of all pokemons
  export function getAllPokemon(url) {
    return fetch(url).then((res) => res.json());
  }
  