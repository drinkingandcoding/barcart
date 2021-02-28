import chalk from 'chalk';
import { data } from '../cocktails';
import { spacer } from '../utils/utils';
const log = console.log;
const prefix = 'You need to supply a type of';

// todo fix any
export const findByGlass = (input: string):any => {
  if(input) {
    const drinks = data.filter(x => x.glass === input);
    if(drinks.length) {
      log(`${chalk.magenta.bold("Here are all the drinks you can make with a " + input + " glass")}`);
      drinks.map(x => log(`${spacer}${x.name}`));
    } else {
      log(`${chalk.magenta.bold("No drinks found using a " + input + " glass")}`);
    }
    return drinks;
  } else {
    const errorString = `${prefix} glass!`;
    log(errorString);
    return errorString;
  }
}

export const findByLiquor = (input: string):string => {
  if(input) {
    log(input)
    return input;
  } else {
    const errorString = `${prefix} liquor!`;
    log(errorString);
    return errorString;
  }
};
