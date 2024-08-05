import { getCache, setCache } from "./loadAndSave";

function getRandomList(listSize, maxNumber) {
    let list = [];
    for (let i = 0; i < listSize; i++) {
      let randomNumber = Math.floor(Math.random()*(maxNumber+1))
      if (list.includes(randomNumber) || randomNumber === 0){ //Avoid repeated numbers or zero
        i--;
      } else {
        list.push(randomNumber);
      }
    }
    return list;
}

async function getPokeData(cache, list) {

  for (let id of list) {
    if (!cache[id]) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokemon = await response.json();

      let pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); // To Title
      let pokemonImage = pokemon.sprites.other["official-artwork"].front_default //URL to image
      let pokemonType = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1); //To title
      cache[id] = {pokemonName, pokemonImage, pokemonType};

      console.log(`getPokeData: Hit the Api for the pokemon number ${id} - ${pokemonName}`);
    }
  }
  setCache(cache);
}
//Wrapper for the other two functions in this file
export default async function getListAndCachePokemons(listSize, maxNumber){
  let cache =  (getCache() || {}); //Defining the cache object
  let list = getRandomList(listSize, maxNumber);
  await getPokeData(cache, list);
  return list;
}
