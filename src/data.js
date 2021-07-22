

function filterData(data, condition) {

  let pokemonsFilter = [];

  for (let i = 0; i < data.pokemon.length; i++) {

    for (let types = 0; data.pokemon[i].type; types++) {
      if (data.pokemon[i].type[types] === condition) {
        pokemonsFilter.push(data.pokemon[i]);
      }
    }
  }

  return pokemonsFilter;
}

function sortData(data, sortBy, sortOrder) {

  let pokemonsOrder = [];
  for (let i = 0; i < data.pokemon.length; i++) {

    /*for (let names = 0; data.pokemon[i].name; i++) {
      if (data.pokemon.[].names === sortBy);
      pokemonsOrder.push(data.pokemon[i]);*/

    }
  }


export {
  filterData,
  sortData
};
