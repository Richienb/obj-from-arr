"use strict"

const _ = require("lodash")

module.exports = (arr, iteratee) => _.fromPairs(_.map(arr, (value, index, array) => [value, iteratee(value, index, array)]))
