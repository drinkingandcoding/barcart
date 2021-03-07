# barcart

Everything you need to make drinks from your CLI

## run locally
* `npm install`
* `npm link`
* `npm run build`
* `barcart make manhattan`

## CLI commands

### Make
* List instructions based on a drink name: `barcart make ${drinkName}`
* List instructions for random drinks: `barcart make -r`

### Find
* List drinks based on glassware: `barcart find -g ${glassware}`
* List drinks based on liquor: `barcart find -l ${liquor}`

#### Notes:
Liquors are normalized, this means that:

* "whisky" and "whiskey" are considerd the same thing when searching
* "white rum", "black rum", etc. are considered the same thing when searching

## Usage

### Make
```js
import { makeByName, makeByRandom } from 'barcart/lib/make';

const foo = makeByName('manhattan');
const bar = makeByRandom();
```

### Find
```js
import { findByGlass, findByLiquor } from 'barcart/lib/find';

const foo = findByGlass('martini');
const bar = findByLiquor('rum');
```