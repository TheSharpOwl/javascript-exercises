const sumAll = function (first, second) {
  if (
    first < 0 ||
    second < 0 ||
    typeof first != "number" ||
    typeof second != "number"
  )
    return "ERROR";

  let res = 0;
  for (let i = first; i <= second; i++) {
    res += i;
  }
  // for case second > first (and removing the equal case to not have twice the answer)
  for (let i = second; i <= first && first !== second; i++) {
    res += i;
  }

  return res;
};

// Do not edit below this line
module.exports = sumAll;
