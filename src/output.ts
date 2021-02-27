import chalk from 'chalk';
const log = console.log;

export interface Result {
  name: string;
  glass: string;
  category?: string | null;
  ingredients?: (IngredientsEntity)[] | null;
  garnish?: string | null;
  preparation?: string | null;
}
export interface IngredientsEntity {
  unit?: string | null;
  amount?: number | null;
  ingredient?: string | null;
  label?: string | null;
  special?: string | null;
}

const output = (result: Result) => {
  
  // Name
  log(`${chalk.magenta.bold("Here's how you make a " + result.name)}`);

  // Glass
  log(`1. Glassware: ${result.glass}`);
  
  // List ingredients
  log('2. Mix together:');
  result.ingredients?.map(x => console.log(`   ${x.amount}${x.unit} of ${x.ingredient}`));

  // Preparation
  log(`3. ${result.preparation}`);

  // Garnish
  result.garnish && log(`4. Garnish: ${result.garnish?.toLowerCase()}`);

  // Finish
  log('5. Drink up 🥃')
}

export default output;