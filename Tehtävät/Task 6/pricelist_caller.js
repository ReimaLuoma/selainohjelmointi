import {setPriceList, getPrice} from "./Pricelist.mjs";

const productList = 
[   
    {
  
      itemid: 1,
  
      itemname: 'bottle',
  
      prices: [{ qty: 1, price: 1.25},{ qty: 100, price: 1.10},{ qty: 1000, price: 1.00}]
  
    },
  
    {
  
      itemid: 2,
  
      itemname: 'glass',
  
      prices: [{ qty: 1, price: 2.50},{ qty: 50, price: 2.00},{ qty: 200, price: 1.60}]
  
    },

    {
  
        itemid: 3,
    
        itemname: 'can',
    
        prices: [{ qty: 1, price: 1.15},{ qty: 500, price: 1.05},{ qty: 2000, price: 0.95}]
    
      }
]

setPriceList(productList);

let call_1 = getPrice(3, 500);
console.log(call_1);