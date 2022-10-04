// Math utilities
const utils = {
  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // create an array of n random numbers between 1 and 100
  random: (n) => {
    const randomNumbers = [];
    const numbersHash = {};
    while(randomNumbers.length < n) {
      const random = 1 + Math.floor(100 * Math.random());
      if(!numbersHash[random]) {
        randomNumbers.push(random);
        numbersHash[random] = 1;
      }
    }
    return randomNumbers;
  },
};

export default utils;