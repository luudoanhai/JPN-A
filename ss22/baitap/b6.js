let array = [1 , 2 , 3 , 4 , 5];
let sumEven = 0;
let sumOdd = 0;
for (let i = 0 ; i < array.length ; i++){
  (array[i]%2 == 0)? sumEven += array[i]:sumOdd+=array[i];
}
  console.log(sumEven,sumOdd);