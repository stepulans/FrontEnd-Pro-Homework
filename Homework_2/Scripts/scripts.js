//============================ 1 ======================
function checkString(arg){
    console.log(arg.charAt(0));
}
checkString("FrontEnd")
//============================ 2 ======================
function checkMiddleValue(num1,num2){
    let result = (num1 + num2) / 2;
    return Math.round(result * 10) /10;
}
console.log(checkMiddleValue(10,20));
//============================ 3 ======================
function changeValue(arg1,arg2){
    if(arg1 == true){
        return arg2 ** 2;
    }else{
        return Math.sqrt(arg2); 
    }
}
console.log(changeValue(true, 5));
console.log(changeValue(false, 5));
//============================== 4 ======================
function countString(arg){
    let count = 0;
    let ignoreLetters = ['a', 'o', 'u', 'c'];
    for(let i = 0; i < arg.length; i++){
        let letter = arg[i].toLowerCase();
        if (!ignoreLetters.includes(letter)){
            count++
        }
    }
    return count
}
console.log(countString("Warhammer"));
//=============================== 5 =====================
function createQuence(num){
    let sequence = ''
    for(let i = 0; i <= num; i++){
        sequence += '*'.repeat(i) + '\n'
    }
    console.log(sequence);
}
createQuence(5)
//============================== Callback ===============
//============================== 1 ======================
function checkEven(array,callback){
    for(let i = 0; i < array.length; i++){
        if(!callback(array[i])){
            return "Не все элементы удовлетворяют указанному условию"
        }
    }
    return "Все элементы удовлетворяют указанному условию"
}
let array = [1, 2, 3, 4, 5];
console.log(checkEven(array, (elem) => elem > 0));
console.log(checkEven(array, (elem) => elem < 4));
//=============================== 2 ========================
function checkSome(array,callback){
    if(array.some(callback)){
        return "Минимум 1 элемент удовлетворяет указанному условию"
    }else{
       return "Ни один элемент не удовлетворяют указанному условию"
    }
}
let array1 = [1,2,3,4,5]
console.log(checkSome(array, (elem) => elem === 4));
console.log(checkSome(array, (elem) => elem === 6));
