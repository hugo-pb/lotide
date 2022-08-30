# Lotide 1.0.1

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @hugopb/lotide`

**Require it:**

`const _ = require('@hugopb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- head, (retunrs first element of Array)
- tail, (returns array with out the first element)
- middle, (returns middle of array)
- countLetters, (returns count of letters on string passed as parameter)
- countOnly, (returns count of parameter passed in an array also passed as the first parameter)
- eqArrays, (returns true or false comparing if 2 arrays passed as parameters are equal)
- eqObjects, (returns true or false comparing if 2 objects passed as parameters are equal)
- findKey, (returns key of an object pass as a parameter if it returns true on callback passed as secondnd parameter)
- findKeyByValue, (returns key of an object passed as a parameter, that its vallue === second parameter)
- letterPosition, (returns object with the possion of letters on a string)
- map, (returns new aray modifiying each element of an array passed as parameter with the call back function as second parameter)
- takeUntil, (return elements of array until it returns true from callback passes as second parameter)
- without (returns array with out second parameter if its in the array passed as first parameter)
