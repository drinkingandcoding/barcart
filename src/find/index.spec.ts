import { findByGlass, findByIngredients, findByLiquor } from './index';
import { expect } from 'chai';
import { data } from '../cocktails';
import 'mocha';

describe('findByGlass function', () => {
  it('should return correct drink by glassware(case sensitive)', () => {
    const result = findByGlass('martini');
    expect(result[0].name).to.equal(data[0].name);
  });

  it('should return correct drink by glassware(case insensitive)', () => {
    const result = findByGlass('MaRtInI');
    expect(result[0].name).to.equal(data[0].name);
  });
});

describe('findByIngredients function', () => {
  it('should return correct drink by ingredients(case sensitive)', () => {
    const result = findByIngredients(['gin', 'vodka', 'lillet blonde']);
    expect(result[0].name).to.equal(data[0].name);
  });

  it('should return correct drink by ingredients(case insensitive)', () => {
    const result = findByIngredients(['GiN', 'VoDKA', 'LILLET blonde']);
    expect(result[0].name).to.equal(data[0].name);
  });
});

describe('findByLiquor function', () => {
  it('should return correct drink by liquor(case sensitive)', () => {
    const result = findByLiquor('vodka');
    expect(result[0].name).to.equal(data[0].name);
  });

  it('should return correct drink by liquor(case insensitive)', () => {
    const result = findByLiquor('VoDKa');
    expect(result[0].name).to.equal(data[0].name);
  });
});

