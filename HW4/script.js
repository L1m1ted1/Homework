// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleSquare(a,b){
    return console.log(a * b);
}
rectangleSquare(2,6)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(r){
    let res = r * r * Math.PI
    return console.log(res)
}
circleSquare(3)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare(r,h){
    return console.log(2 * r * Math.PI * (h + r))
}
cylinderSquare(6,7)

// - створити функцію яка приймає масив та виводить кожен його елемен
function enterArray(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
enterArray([2,3,6,1,5,6])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function enterParagraph(array){
    for (let i = 0; i < array.length; i++) {
        document.write(`<p>${array[i]}</p>`)
    }
}
enterParagraph([1,2,4,'test',true])

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlLi(text){
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
createUlLi('one')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlLiFixed(text,a){
    document.write('<ul>')
    for (let i = 0; i < a; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
createUlLiFixed('one',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function enterElements(array){
    document.write('<ul>')
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write('</ul>')
}
enterElements([true,'not!',false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObj = [
    {id: 10, name: 'Roman', age: 18},
    {id: 1, name: 'Oleg', age: 24},
    {id: 5, name: 'Vika', age: 20}
]
function outputObj(objects){
    for (let objectsElement of objects) {
        console.log(objectsElement)
    }
}
outputObj(arrObj)

// - створити функцію яка повертає найменьше число з масиву
function smallestNumber(array){
    let smallest = array[0]
    for (let i = 0; i < array.length; i++) {
        if(array[i] < smallest){
            smallest = array[i]
        }
    }
    return console.log(`Smallest number is: ${smallest}`)
}
smallestNumber( [80,2,4,65,3,2])

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    return console.log(res)
}
sum([1,2,3,4])

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    let i1 = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = i1
    return console.log(arr)
}
swap([2,3,5],1,0)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let i = 0
    while (i < currencyValues.length) {
        if(currencyValues[i]['currency'] === exchangeCurrency){
            return console.log(sumUAH / currencyValues[i]['value'])
        }
        i++
    }
}
exchange(2000,[{currency:'USD',value:40}, {currency:'EUR',value:42}], 'EUR')