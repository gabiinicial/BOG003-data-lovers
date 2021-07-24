
function filterData(data, condition) {

  let pokemonsFilter = [];

  for (let i = 0; i < data.pokemon.length; i++) {

    for (let types = 0; types < data.pokemon[i].type.length; types++) {
      if (data.pokemon[i].type[types] === condition) {
        pokemonsFilter.push(data.pokemon[i]);
      }
    }
  }
  console.log(pokemonsFilter);
  return pokemonsFilter;
}
//funcion (parametros que oredenan con algunos campos y segun las indicaciones)
function sortData(data, sortBy, sortOrder) {

  let pokemonsOrder = data.slice();

  console.log('la propiedad es:' + sortBy);
  console.log(data);

  if (sortBy === "num") {
    if (sortOrder === "asc") {
      pokemonsOrder.sort((a, b) => (a.num > b.num) ? 1 : -1);
    } else {
      pokemonsOrder.sort((a, b) => (a.num < b.num) ? 1 : -1);
    }
  }
  if (sortBy === "name") {
    if (sortOrder === "asc") {
      pokemonsOrder.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else {
      pokemonsOrder.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
  }
  if (sortBy === "weaknesses") {
    if (sortOrder === "asc") {
      pokemonsOrder.sort((a, b) => (a.weaknesses.length > b.weaknesses.length) ? 1 : -1);
    } else {
      pokemonsOrder.sort((a, b) => (a.weaknesses.length < b.weaknesses.length) ? 1 : -1);
    }
  }
  
  console.log(pokemonsOrder);
  return pokemonsOrder;
}
export {
  filterData, sortData
}