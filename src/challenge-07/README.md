# Challenge #7: Presents stock

## 📖 Instructions

In Santa's warehouses they are taking inventory. There are three stores (each represented as an Array). In every store there are certain gifts.

We have been asked to write a program that tells us what gifts to buy to replenish in our stores as Christmas approaches. **A gift has to be replenished when there is only stock in one of the three warehouses.**

For example, if we have the following warehouses:

```js
const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

/* Warehouse a1 has "bike" and "car".
Warehouse a2 has "car", "bike" and "doll".
Warehouse a3 has "bike" and "pc".

Presents "doll" and "pc" are only in stock in warehouses a2 and a3
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
```

As you can see, warehouses can have the same gift repeated several times. But, no matter how much stock there is in a warehouse, if we don't have it in the other two, we must replace it to have a better distribution.

## Things to keep in mind:

- Create a getGiftsToRefill function that takes three Arrays as parameters.
- The function must return an Array with the gifts to be replaced.
- A gift must be replenished when there is only stock in one of the three warehouses.
- If there are no gifts to replace, the function must return an empty Array.
- If there is more than one gift to be replaced, the function must return an Array with all the gifts to be replaced.
