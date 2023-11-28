 // - За допомогою циклу for і document.write() вивести 10 блоків div с довільним текстом всередині
for (let i = 0; i < 10; i++){
    document.write("<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci!</p></div>");
}

// - За допомогою циклу for і document.write() вивести 10 блоків div з довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){
    document.write(`<div><p>${i + 1} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci!</p></div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 з довільним текстом всередині.
let i= 0;
while (i < 20){
    document.write(`<div><h1>Lorem ipsum dolor sit.</h1></div>`)
    i++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 з довільним текстом і індексом всередині.

while (i < 40){
    document.write(`<div><h1>${i - 19}  Lorem ipsum dolor sit amet.</h1></div>`)
    i++
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>')
for (let listOfItemsKey in listOfItems) {
    document.write(`<li>${listOfItems[listOfItemsKey]}</li>`)
}
document.write('</ul>')

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write('<div class="product-card">')
for (const productsKey in products) {
    document.write(`<h3 class="product-title">${products[productsKey]['title']} | Price -  ${products[productsKey]['price']}</h3>`)
    document.write(`<img style="width: 400px; height: 400px" src="${products[productsKey]['image']}" alt="img ${productsKey}">`)
}
document.write('</div>')

// за допомоги циклу вивести:
//     - користувачів зі статусом true
//     - користувачів зі статусом false
//     - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


for (let user of users) {
    if (user.status){
        console.log(user.name, user.age, user.status)
    }
}
console.log('------------------')
for (let user of users) {
    if (!user.status){
         console.log(user.name, user.age, user.status)
     }
}
 console.log('------------------')
for (const user of users) {
     if (user.age > 30){
         console.log(user.name, user.age, user.status)
     }
}