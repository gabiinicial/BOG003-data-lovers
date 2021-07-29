function filterData(data, condition) {

  let pokemonsFilter = [];

  for (let i = 0; i < data.pokemon.length; i++) {

    for (let types = 0; types < data.pokemon[i].type.length; types++) {
      if (data.pokemon[i].type[types] === condition) {
        pokemonsFilter.push(data.pokemon[i]);
      }
    }
  }
  return pokemonsFilter;
}
//funcion (parametros que oredenan con algunos campos y segun las indicaciones)
function sortData(data, sortBy, sortOrder) {

  let pokemonsOrder = data.slice();


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

  return pokemonsOrder;
}

function computeStats(data) {
  let minR = []
  let maxR = []
  for (let i = 0; i < data.pokemon.length; i++) {

    if (data.pokemon[i].resistant.length <= 3) {
      minR.push(data.pokemon[i]);
    } else
    if (data.pokemon[i].resistant.length >= 4) {
      maxR.push(data.pokemon[i]);
    }
  }

  const totalResistant = maxR.length + minR.length;

  let porcentageMin = (minR.length/totalResistant)*100; 
  let porcentageMax =  (maxR.length/totalResistant)*100;  
  
  porcentageMax = Math.round(porcentageMax);
  porcentageMin = Math.round(porcentageMin);

  const eunnombre = {
    "porcentageMax":porcentageMax,
    "porcentageMin":porcentageMin
  }
  console.log("el porcentaje min es: "+eunnombre.porcentageMin+"/ "+totalResistant);
  console.log("el porcentaje max es: "+eunnombre.porcentageMax+"/ "+totalResistant);
  
  return eunnombre;
}

export {
  filterData,
  sortData,
  computeStats
}
