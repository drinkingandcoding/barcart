import { getRandomInt, normalizeLiquor, capitalizeFirstLetter, findSimilarDrinks } from './index';
import { expect } from 'chai';
import { data } from '../cocktails';
import 'mocha';

describe('getRandomInt function', () => {
  it('should return random integer with a max of 10', () => {
    const result = getRandomInt(10);
    expect(result).to.be.a('number');
  });
});

describe('normalieLiquor function', () => {
  it('should normalize "whisky" ', () => {
    const result = normalizeLiquor('whisky');
    expect(result).to.equal('whiskey');
  });

  it('should normalize "rum" ', () => {
    const result = normalizeLiquor('white rum');
    expect(result).to.equal('rum');
  });

  it('should normalize anything ', () => {
    const result = normalizeLiquor('FOOBAR');
    expect(result).to.equal('foobar');
  });
});

describe('capitalizeFirstLetter function', () => {
  it('should return string with capital letter', () => {
    const result = capitalizeFirstLetter('foo bar');
    expect(result).to.equal('Foo bar');
  });
});

describe('findSimilarDrink function', () => {
  it('should return similar drink names', () => {
    const result = findSimilarDrinks('Vesperr');
    expect(result[0].name).to.equal(data[0].name);
  });
});