import chalk from 'chalk';

export const spacer = '   - ';

export const logTitle = (input: string):void => {
  log(`${chalk.magenta.bold(input)}`);
}

export const logBody = (input: string):void => {
  log(`${spacer}${input}`);
}

export const log = (input: string):void => {
  console.log(input)
}