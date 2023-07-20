"use strict";
const shops = [{ rise: 500 }, { oil: 1000 }, { bread: 1500 },{0:85},{1:95},{2:105}];
const budget = [500, 1000, 1500];
const map = new Map();

shops.forEach((shop, index) => {
  map.set(shop, budget[index]);
});

console.log(map);
// map.set(shops[0],123400)
// .set(shops[1],99400)
// .set(shops[2],30);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[1]));
// map.delete(key);
// map.clear();
// map.size;
//map.keys()

// const goods = [];
// for (let shop of map.keys()) {
//   goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//   console.log(price);
// }


// for(let [shop,price] of map.entries()){
//     console.log(price,shop);
// }

// map.forEach((value,key,map)=>{
//     console.log(value,key);
// })