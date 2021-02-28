#!/usr/bin/env node

import { data } from '../cocktails';
import output from './output';
import { getRandomInt } from '../utils/utils';

const log = console.log;

export const makeByName = (input: string) => {

  const drink = input.toLowerCase();
  const item = data.find(x => x.name.toLowerCase() === drink);

  if(item) {
    output(item);
  } else {
    log("I don't know that one 😭");
  }
};

export const makeRandom = () => {
  log('Picking a random cocktail for you!');
  output(data[getRandomInt(data.length)]);
};