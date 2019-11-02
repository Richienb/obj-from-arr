# Create object from array [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/obj-from-arr/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/obj-from-arr)

Convert an array to an object based on the return value of an iteratee.

[![NPM Badge](https://nodei.co/npm/obj-from-arr.png)](https://npmjs.com/package/obj-from-arr)

## Install

```sh
npm install obj-from-arr
```

## Usage

```js
const objFromArr = require("obj-from-arr");

objFromArr(["a", "b", "c"], val => {
    // Handle array here. I'm going to use some simple handling logic as an example.
    if (val === "a") return 1;
    if (val === "b") return 2;
    if (val === "c") return 3;
});
//=> { "a": 1, "b": 2, "c": 3 }
```

## API

### objFromArr(array, iteratee)

#### arr

Type: `array`

The array to convert.

#### iteratee

Type: `function<Array.map>`

The iteratee to use when iterating through the array.
