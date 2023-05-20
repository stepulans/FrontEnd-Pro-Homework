//---------------------- Task 1
// function stringLenghtSqrt(array){
//     for (let index = 0; index < array.length; index++) {
//         const length = array[index].length;
//         let sqrt = 0
//         while (sqrt * sqrt < length) {
//             sqrt++;
//         }
//         if (sqrt * sqrt === length) {
//             return true
//         }
//     }
//     return false
// }
// const array = ['Велосипед', 'Торт', 'Тенис', 'Ракетка', 'Город'];
// const result = stringLenghtSqrt(array);
// console.log(result);

//---------------------- Task 2

// function getNegativeNumbers(array){
//     const negativeNumbers = []
//     for (let index = 0; index < array.length; index++) {
//         if(array[index] < 0){
//             negativeNumbers.push(array[index])
//         }
//     }
//     return negativeNumbers
// }
// const array = [1, 2, 3, -4, 5, -6, 7, -8, 9, 10];
// const result = getNegativeNumbers(array);
// console.log(result);

//---------------------- Task 3

// let numbers = [10, 20, 33, 55, 100]
// let sum = 0
// let count = 0
// for (let index = 0; index < numbers.length; index++) {
//     if(sum + numbers[index] <= 50){
//         sum += numbers[index]
//         count++
//     } else{
//         break;
//     }
// }
// console.log(count);

//---------------------- Task 4

// let values = ["100", "30", "Не число", "20", "Тоже не число"]
// let sum = 0
// for (let index = 0; index < values.length; index++) {
//     const num = +values[index]
//     if(!isNaN(num)){
//         sum += num
//     }   
// }
// console.log(sum);

//---------------------- Task 5

let array_1 = [1, 4, 7, 8, 2] 
let array_2 = [1, 5, 11, 6, 2]
function containsEqual(arr1, arr2){
    const map1 = {}
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i]
        map1[value] = true
        
    }
    for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i];
        if(map1[value]){
            result.push(value)
        }
    }
    return result.sort((a,b) => b - a)
}
const result = containsEqual(array_1, array_2);
console.log(result);