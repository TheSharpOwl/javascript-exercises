// includes does the job but thought it first it's the reason
const myContains= function(arr, val) {
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === val)
        return true;
    }
    return false;
}
const removeFromArray = function () {
  let args = Array.from(arguments);
  let arr = args[0];
  let toRemove = args.slice(1, args.length);
  let newArr = [];
  for(let i = 0; i < arr.length;i++)
  {
    if(!toRemove.includes(arr[i])) // or use myContains
    {
        newArr.push(arr[i]);
    }
  }

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
