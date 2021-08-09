
function filterData(data, condition,) {
  let pokemonsFilter = [];
  for (let i = 0; i < data.pokemon.length; i++) {
    if(condition === "all"){
      pokemonsFilter.push(data.pokemon[i]);
    }
    for (let types = 0; types < data.pokemon[i].type.length; types++) {
      if (data.pokemon[i].type[types] === condition) {
        pokemonsFilter.push(data.pokemon[i]);
      }
    }
      }
  return pokemonsFilter ;
}
//funcion (parametros que oredenan con algunos campos y segun las indicaciones)
function sortData(data, sortBy, sortOrder) {

  let pokemonsOrder = data.slice();// el slice se utilizo para crear un clon de ese arreglo y que no se generara un ciclo sin fin


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
  let attackmin = []
  let attackmax = []
  let minR = []
  let maxR = []
  for (let i = 0; i < data.pokemon.length; i++) {
    const baseAttak = data.pokemon[i].stats["base-attack"]

    if (data.pokemon[i].resistant.length <= 3) {
      minR.push(data.pokemon[i]);
    } else {
      if (data.pokemon[i].resistant.length >= 4) {
        maxR.push(data.pokemon[i]);
      }
    }

    if (parseInt(baseAttak) <= 130) {
      attackmin.push(data.pokemon[i]);
    } else{
      if (parseInt(baseAttak) >= 131) {
        attackmax.push(data.pokemon[i]);
      }
    }
   
  }
  const totalResistant = maxR.length + minR.length;
  const totalAttack = attackmin.length + attackmax.length;
  let porcentageAttackmin = (attackmin.length / totalAttack) * 100;
  let porcentageAttackmax = (attackmax.length / totalAttack) * 100;
  let porcentageMin = (minR.length / totalResistant) * 100;
  let porcentageMax = (maxR.length / totalResistant) * 100;

  porcentageAttackmin = Math.round(porcentageAttackmin);
  porcentageAttackmax =  Math.round( porcentageAttackmax);
  porcentageMax = Math.round(porcentageMax);
  porcentageMin = Math.round(porcentageMin);

  const porcentage = {
    "Minimo Ataque": porcentageAttackmin,
    "Maximo Ataque": porcentageAttackmax,
    "Maxima Resistencia": porcentageMax,
    "Minima Resistencia": porcentageMin
  }
  console.log("el porcentaje min es: " + porcentage.porcentageAttackmin + "/ " + totalAttack);
  console.log("el porcentaje max es: " + porcentage.porcentageAttackmax + "/ " + totalAttack);
  return porcentage;
}
/*let computeStatsTwo = (data) =>{
  let sumattak= [];
 data.map((dato)=>{
  
  
   sumattak= sumattak + Number(dato.stats["base-attak"]);

});
return (sumattak /data);*/


export {
  filterData,
  sortData,
  computeStats
}
