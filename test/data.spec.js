import {
  sortData,
  filterData,
  computeStats
} from '../src/data.js';



describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('retornar `filterData` para "ice" devuelveme un arreglo vacio', () => {
    let filtPokemon = {
      pokemon: [{"num": "004","name": "charmander","type": ["fire"],},{"num": "005","name": "charmeleon","type": ["fire"],}]
    };
    expect(filterData(filtPokemon, "ice")).toEqual([]);
  });
  it('retornar `filterData` para "all" devuelveme todos', () => {
    let filtPokemon = {
      pokemon: [{"num": "004","name": "charmander" ,"type": ["fire"],},{"num": "005","name": "charmeleon","type": ["fire"],}]
    };
    expect(filterData(filtPokemon, "all")).toEqual(filtPokemon["pokemon"]);
  });
  it('retornar `filterData` para "fire" devuelveme un arreglo ', () => {
    let filtPokemon = {
      pokemon: [{"num": "004","name": "charmander" ,"type": ["fire"],},{"num": "005","name": "charmeleon","type": ["fire"],}]
    };
    expect(filterData(filtPokemon, "fire")).toEqual(filtPokemon["pokemon"]);
  });
  it('returna `filterData` para "water" devuela los arreglos de ese tipo', () => {
    let filtPokemon = {
      pokemon: [{"num": "194","name": "wooper","type": ["water","ground"],},{"num": "195","name": "quagsire","type": ["water","ground"]},{"num": "030","name": "nidorina","type": ["poison"],}],
    }
    let  typeWater ={
      pokemon: [{"num": "194","name": "wooper","type": ["water","ground"],},{"num": "195", "name": "quagsire","type": [ "water","ground"],}],
    }
    expect(filterData(filtPokemon, "water")).toEqual(typeWater["pokemon"]);
});
});

describe('sortData', () => {
  it('returns `sortData` for "weaknesses"', () => {
    let testPokemon = [{
      "num": "002","name": "pikachu" ,"weaknesses": [ "fire","psychic"]}, {"num": "001","name": "bulbasaur","weaknesses": ["fire","ice","flying","psychic"]}];
    expect(sortData(testPokemon, "weaknesses", "asc")).toEqual(testPokemon);
  });
  it('returns `sortData` for "weaknesses"', () => {
    let testPokemon = [{
      "num": "002","name": "pikachu" ,"weaknesses": [ "fire","psychic"]}, {"num": "001","name": "bulbasaur","weaknesses": ["fire","ice","flying","psychic"]}];
    expect(sortData(testPokemon, "weaknesses", "desc")).toEqual(testPokemon.reverse());
  });
  it('returns `sortData` for "num" ', () => { // retorna sortData para numero de forma descendente
    let testPokemon = [{
      "num": "001","name": "bulbasaur",},{"num": "002","name": "pikachu",}];
    expect(sortData(testPokemon, "num", "desc")).toEqual(testPokemon.reverse());
  });
    it('returns `sortData` for "num"', () => {
      let testPokemon = [{
        "num": "001","name": "bulbasaur",},{"num": "002","name": "pikachu",}];
      expect(sortData(testPokemon, "num", "asc")).toEqual(testPokemon);
});
it('returns `sortData` for "name"', () => {
  let testPokemon = [{
    "num": "001","name": "bulbasaur",},{"num": "002","name": "pikachu",}];
  expect(sortData(testPokemon, "name", "asc")).toEqual(testPokemon);
});
it('returns `sortData` for "name"', () => {
  let testPokemon = [{
    "num": "001","name": "bulbasaur",},{"num": "002","name": "pikachu",}];
  expect(sortData(testPokemon, "name", "desc")).toEqual(testPokemon.reverse());
});
it('returns `sortData` for "name"', () => {
  let testPokemon = [{
    "num": "001","name": "bulbasaur",},{"num": "002","name": "pikachu",}];
  expect(sortData(testPokemon, "name", "desc")).not.toEqual(testPokemon);
});
});
describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });
 
  it('retornar `computeStats` para devolver totalResistant', () => {
    let computeResistan={
      pokemon:[{"num": "001","name": "bulbasaur","resistant": ["water","electric","grass","fighting","fairy" ], "stats": {
        "base-attack": "118"}
  },{"num": "002","name": "ivysaur","resistant": ["water","electric","grass","fighting","fairy"],"stats": {"base-attack": "151"},},{"num": "003","name": "venusaur","resistant": [ "water","electric","grass","fighting","fairy"],"stats": {"base-attack": "198"}},{"num": "216",
      "name": "teddiursa","resistant": [
        "ghost"
      ],"stats": {
        "base-attack": "116"}
  }]
    }
    const porcentage = {"Minimo Ataque": 50,"Maximo Ataque":50,"Maxima Resistencia": 75,"Minima Resistencia": 25
    };
      expect(computeStats(computeResistan)).toEqual(porcentage);
    });
});