// This method is done through installing a package and working on that,
var genrateName = require("sillyname")
var sillyName = genrateName();

console.log(`My name is ${sillyName}.`);

// This will generate random names 

// This method is done through module where we are calling a module through import
import genrateName from "sillyname";
var sillyName = genrateName();

console.log(`My name is ${sillyName}.`);

// In this we are generating random heroes name.

import superheroes from "superheroes";
const name = superheroes.random();

console.log(`I am ${name}`);