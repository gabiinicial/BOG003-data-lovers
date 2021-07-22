
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
    for (let nums = 0; data.pokemon[i].num; i++) {
      if (data.pokemon.num[nums] === sortBy);
      pokemonsOrder.push(data.pokemon[i]);
    }
    /*else if(data.pokemon.num).sortOrder((a, b) => a - b);*/
    
  }
  return pokemonsOrder;
}
export {
  filterData, sortData
}