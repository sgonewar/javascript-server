"use strict";
exports.__esModule = true;
var print1 = require("./patterns/index");
var print2 = require("./utils/index");
var constants_js_1 = require("./constants.js");
var input = require("inquirer");
var noOfRows = input.promt();
console.log("------------------------------");
print1.diamond(noOfRows);
console.log("------------------------------");
print1.equilateral(noOfRows);
console.log("------------------------------");
console.log("Check Permission");
print2.checkPermission();
console.log("------------------------------");
console.log("Check Email");
print2.checkEmailValidate(constants_js_1.users);
console.log("------------------------------");
