import { makeByName, makeByRandom } from './index';
import { expect } from 'chai';
import { data } from '../cocktails';
import 'mocha';

describe('makeByName function', () => {
  it('should return correct drink by name(case sensitive)', () => {
    const result = makeByName('Vesper');
    expect(result[0]).to.equal(data[0]);
  });

  it('should return correct drink by name(case insensitive)', () => {
    const result = makeByName('VeSpEr');
    expect(result[0]).to.equal(data[0]);
  });
});

describe('makeByRandom function', () => {
  it('should return random cocktail', () => {
    const result = makeByRandom();
    expect(result[0]).to.have.property('name');
  });
});
