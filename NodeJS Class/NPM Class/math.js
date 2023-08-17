// class math {
//   add(x, y) {
//     return x + y;
//   }

//   square(x) {
//     return x * x;
//   }

//   PI = 3.14159;
// }

//exports.math = math;

//module.exports.math;

const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x * x;
};

const PI = 3.14159;

const math = {
  add: add,
  square: square,
  PI: PI,
};

module.exports = math;
