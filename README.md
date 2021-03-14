# barcart

Everything you need to make drinks from your CLI

## run locally
* `npm install`
* `npm run build`

## Usage

All functions should return an array of objects declared in [drinkInterfaces](https://github.com/drinkingandcoding/barcart/blob/main/src/interfaces/drinkInterface.ts)

### Make
```js
import { makeByName, makeByRandom } from 'barcart/dist';

const foo = makeByName('manhattan');
const bar = makeByRandom();
```

### Find
```js
import { findByGlass, findByLiquor, findByIngredients } from 'barcart/dist';

const foo = findByGlass('martini');
const bar = findByLiquor('rum');
const baz = findByIngredients(['vodka', 'orange juice']);
```