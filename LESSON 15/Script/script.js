// Задание Создать объект с названием и ценой продукта
// и выведите данные в консоль

// const product = {
//     title: 'Millk',
//     price: 45
// }

// console.log(product.title);

// product.fat = [0, 1.5, 3.5]

// console.log(product);


const products = [
    {
        type: 'product',
        title: 'Millk',
        price: 34
    },
    {
        type: 'product',
        title: 'coffe',
        price: 56
    },
    {
        type: 'product',
        title: 'bread',
        price: 10
    },
    {
        type: 'product',
        title: 'butter',
        price: 89
    },
    {
        type: 'sport',
        title: 'Лыжи',
        price: 345
    },
    {
        type: 'sport',
        title: 'Ролики',
        price: 200
    },
    {
        type: 'sport',
        title: 'велосипед',
        price: 400
    }

  ]
//   for(let i = 0; i < products.length; i++) {

// console.log(`Name: ${products[2].title} 
// Price: ${products[2].price}$` );
    // }

    // Задание пройдителсь циклом по массиву 
    // объектов и найдите общую сумму товаров


// let sumPrice = 0
// for (let i = 0; i < products.length; i++) {
    
//     sumPrice = sumPrice + products[i].price
//     console.log(sumPrice);
// }

// Задание: вывести название товаров, 
// которые дороже 150

// вывести название товаров и цену со скидкой.

// let newPrice = price - price / 100 * discount
// console.log(newPrice);

// for (let i = 0; i < products.length; i++) {
//     let newPrice = products[i].price - pro[i].price / 100 *
//     products[i].discount
//     console.log(`Название: ${products [i].title}, Старая цена: ${products [i].price},
//         Новая цена: ${newPrice}`);
// }

// let arr = [34, 23, 12]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// эти 2 запист равны
// let[a, b, c] = arr //деструктуризация массива
// console.log(a, b, c)

// деструктуризация объекта
// let obj = {cat: 34, dog: 12, fish:78}

// let cat = obj.cat
// let a = obj.a
// let b = obj.b
// let c = obj.c
// let {fish, cat, dog} = obj
// console.log(cat, fish, dog);

// Задание:  вывести названия товаров и цену со скидкой. 
// без деструктуризации
// for (let i = 0; i < products.length; i++) {
//     let newPrice = products[i].price - products[i].price / 100 * products[i].discount
//     console.log(`Название: ${products[i].title}, Старая Цена: ${products[i].price}$, Новая Цена: ${newPrice}`);
// }
// // с деструктуризацией
// for (let i = 0; i < products.length; i++) {
//     let {price, discount, title} = products[i]
    
//     let newPrice = price - price / 100 * discount
//     console.log(`Название: ${title}, Старая Цена: ${price}$, Новая Цена: ${newPrice}`);
// }


// Задание: пройдитесь циклом по массиву и выведите 
// только спортивные товары.

// for (let i = 0; i < products.length; i++) {
//     if (products[i].type === 'sport') {
//         console.log(products[i].title);
//     }
// }
// с деструктуризацией
// for (let i = 0; i < products.length; i++) {
    
//     let {type, title} = products[i]
//     if (type === 'sport') {
        
//         console.log(title);
        
//     }
// }


// Задание: создайте новый пустой массив. Пройдитесь циклом по массиву 
// с продуктами и в новый массив добавьте те продукты, 
// которые дешевле определенной суммы.

let newArr = [] // массив
for(let i = 0; i < products.length; i++) {
    if (products[i].price < 100) {
        newArr.push(products[i])
    }
}
console.log(newArr);