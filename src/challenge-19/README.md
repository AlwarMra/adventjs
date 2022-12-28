# Challenge 19: Sorting toys

The day is coming and Santa Claus has made a mess of the toy store. Help him sort the toys in the store so he can find them more easily.

To do this, we are given two arrays. The first is an **array of toys**, and the second is an **array of numbers indicating the position of each toy in the store.**

The only thing to keep in mind is that the **positions may not start at 0**, although they will always be consecutive numbers and in ascending order.

We have to **return an array where each toy is in its corresponding position.**

```js
const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
```
