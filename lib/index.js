'use strict';

var _lib = require('./lib');

var _fs = require('fs');

// TODO read in the file createPrompt.json, run the object read in through createPrompt,
// pass the result of createPrompt to chooseRandom, and then save the result to
// cp_solutions.json
// TODO import readFile, writeFile, chooseRandom, createPrompt, and createQuestions
(0, _fs.readFile)('./lib/createPrompt.json', (err, data) => {
  let newRandom = (0, _lib.chooseRandom)((0, _lib.createPrompt)(JSON.parse(data)));
  (0, _fs.writeFile)('./lib/cp_solutions.json', JSON.stringify(newRandom), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been created');
  });
});
// TODO read the file createQuestions.json. Pass the read in object to createQuestions,
// pass its result to chooseRandom, and then save the final result to cq_solutions.json
(0, _fs.readFile)('./lib/createQuestions.json', (err, data) => {
  let newRandom = (0, _lib.chooseRandom)((0, _lib.createQuestions)(JSON.parse(data)));
  (0, _fs.writeFile)('./lib/cq_solutions.json', JSON.stringify(newRandom), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been created');
  });
});
// const fizzy = (curr = 1, county = 100) => {
//   return curr > county
//     ? ''
//     : curr % 15 === 0
//         ? 'Fizzbuzz ' + fizzy(curr + 1, county)
//         : curr % 3 === 0
//             ? 'Fizz ' + fizzy(curr + 1, county)
//             : curr % 5 === 0
//                 ? 'Buzz ' + fizzy(curr + 1, county)
//                 : `${curr} ` + fizzy(curr + 1, county)
// }
// console.log(fizzy())