import { data } from './cocktails';
import output from './output';

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(data.length));
}

const random = () => {
  console.log('Picking a random cocktail for you!');
  output(data[getRandomInt()]);
};

export default random;