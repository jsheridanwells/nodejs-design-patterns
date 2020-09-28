const userFactory = require('./userFactory');

const alex = userFactory('Alex Banks', 100);
const eve = userFactory('Eve Porcello', 100, 'This and That');

console.log( alex.toString() )
console.log( eve.toString() )
