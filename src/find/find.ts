import chalk from 'chalk';
import { data } from '../cocktails';
import { spacer } from '../utils/utils';
const log = console.log;

export const findByGlass = (input: string) => {
  const drinks = data.filter(x => x.glass === input);
  if(drinks.length) {
    log(`${chalk.magenta.bold("Here are all the drinks you can make with a " + input + " glass")}`);
    drinks.map(x => log(`${spacer}${x.name}`));
  } else {
    log(`${chalk.magenta.bold("No drinks found using a " + input + " glass")}`);
  }
}