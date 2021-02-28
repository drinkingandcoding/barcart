import { data } from '../cocktails';
import output from './output';
const log = console.log;

const make = (input: string) => {

  const drink = input.toLowerCase();
  const item = data.find(x => x.name.toLowerCase() === drink);

  if(item) {
    output(item);
  } else {
    log("I don't know that one 😭");
  }
};

export default make;
