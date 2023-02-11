const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapMethod = (arr, callBack) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let param = callBack(arr[i]);
    newArr.push(param);
  }
  return newArr;
};

const manualMapMethod = (num) => num + 1;

console.log(mapMethod(myArr, manualMapMethod));

function reduceMethod(arr, callback, initialvalue) {
  if (!initialvalue) {
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
      acc = callback(acc, arr[i]);
    }
    return acc;
  } else {
    acc = initialvalue;
    for (let i = 0; i < arr.length; i++) {
      acc = callback(acc, array[i]);
    }
    return acc;
  }
}

const manualReduceMethod = (acc, curr) => acc + curr;
console.log(reduceMethod(myArr, manualReduceMethod));

const filterMethod = (arr, callback) => {
  let newArr2 = [];
  for (let i = 0; i < arr.length; i++)
    if (callback(i)) {
      newArr2.push(i);
    }
  return newArr2;
};

const isEven = (arr) => arr % 2 === 0;

console.log(filterMethod(myArr, isEven));
