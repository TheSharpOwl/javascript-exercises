const repeatString = function (sentence, times) {
  if (times < 0) return "ERROR";
  if (times == 0) return "";
  return sentence.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;
