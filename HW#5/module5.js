
const module5 = function getRandomArray(length, min, max) {
    const randomArray = [];
  
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.ceil(Math.random() * (max - min) + 1));
    }
  
    return randomArray;
  }

  module.exports = {
    module5
  }