const somethingFromFile1 = require('./examples/file-1');
const somethingFromFile2 = require('./examples/file-2');
const somethingFromFile3 = require('./examples/file-3');
const somethingFromFile4 = require('./examples/file-4');
const somethingFromFile5 = require('./examples/file-5');
const somethingFromFile6 = require('./examples/file-6');


console.log(somethingFromFile1);
console.log(somethingFromFile2);
console.log(somethingFromFile3);
console.log(somethingFromFile4);
console.log(somethingFromFile5);
console.log(somethingFromFile6);
console.log(somethingFromFile2.tutor);
console.log(somethingFromFile3());
console.log(somethingFromFile5.printHello());

// Result1 = Vel
// Result2 = { tutor: 'Vel' }
// Result3 = [Function: printHello]
// Result4 = { add: [Function: add] }
// Result5 = { printHello: [Function: printHello], add: [Function: add] }
// Result6 = {}
