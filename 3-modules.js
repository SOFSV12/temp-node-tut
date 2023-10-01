// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is a module
const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade');
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);