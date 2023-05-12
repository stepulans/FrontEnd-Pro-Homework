let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
]
//------------------------ 1 ------------
// let result = goods.filter(elem => elem.id % 2 === 0)
// console.log(result);

//------------------------ 2 ------------
// let result = goods.reduce((acc, elem) => {
//     return acc + (elem.price * elem.count)
// }, 0);
// console.log(result);

//------------------------ 3 ------------
// let result = goods.find(elem => elem.price % 5 === 0)
// console.log(result);

//------------------------ 4 ------------
// let result = goods.findIndex((elem) => elem.count > 11)
// console.log(result);

//------------------------ 5 -------------
// let result = goods.reduce((count, elem) => {
//     if(elem.count % 2 !== 0){
//         return count + 1
//     }else{
//         return count
//     }
// }, 0);
// console.log(result);

//------------------------ 6 -------------
// let result = goods.reduce((count, elem) => {
//    if(elem.title[0] === 'Т'){
//         return count + 1
//     }else{
//         return count
//     }
// }, 0);
// console.log(result);

//------------------------ 7 -------------
// let result = goods.map(elem => elem.price * 0.65)
// console.log(result);

//------------------------ 8 -------------
// let result = goods.map(elem => {
//     elem.count = 0
//     return elem
// })
// console.log(result);

//------------------------ 9 -------------
let result = goods.sort((crElem,nxElem) => {
    if (crElem.title > nxElem.title) return 1
    if (crElem.title < nxElem.title) return -1
    if (crElem.title === nxElem.title) return 0
})
console.log(result);