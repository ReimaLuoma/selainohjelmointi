let distances = [ 165, 626, 148, 12, 81, 181 ];

//a -> check lenght
let arrLenght = distances.length;

console.log(arrLenght);
console.log(distances.length.toString());

//b -> add numbers to end of array in given order (8,533,76)
distances.push(8);
distances.push(533);
distances.push(76);

console.log(distances);

//c -> remove number 148 from array
distances.splice(2,1);
console.log(distances);