
const module4 = function randomMark(maxmark, minmark) {
    const newMark = Math.ceil(Math.random() * (maxmark - minmark) + 1);
    return newMark;
  }

  module.exports = {
    module4
  }