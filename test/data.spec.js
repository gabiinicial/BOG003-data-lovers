import {
  sortData
} from '../src/data.js';


/*
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `filterData` for "fire"', () => {
    expect(filterData('fire')).toBe('fire');
  });
  it('returns `filterData` for "ice"', () => {
    expect(filterData('fire')).toBe('ice');
  });
  it('returns `filterData` for "normal"', () => {
    expect(filterData('fire')).toBe('normal');
  });
});
*/

describe('sortData', () => {
  /*it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `sortData` for "num"', () => {
    expect(sortData()).toBe('num');
  });*/
  it('returns `sortData` for "weaknesses"', () => {
    let testPokemon = [{
      "num": "001",
      "name": "bulbasaur",
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]
    }, {
      "num": "002",
      "name": "pikachu",
      "weaknesses": [
        "fire",
        "psychic"
      ]
    }];
   
    expect(sortData(testPokemon, "weaknesses", "asc")).not.toBeNull();
  });
});
