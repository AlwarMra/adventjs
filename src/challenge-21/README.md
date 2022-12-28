# Challenge 21: Creating a gifts' table

There are many letters from children asking for gifts and it is very difficult for us to make an inventory of all of them. For this reason, we have decided to create a program that draws us a table with the gifts that are requested and their amounts.

To do this, they give us an array of objects with the names of the gifts and their amounts. Write a function that takes this array and returns a string with the table drawn.

```js
printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 },
])
```

```js
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
```

As you can see, the size of the cells depends on the length of the names of the gifts and the amounts, although at least they will have to be the space of the Gift and Quantity titles respectively.

The table uses the symbols: + for the top border, \* for the bottom border, - for the horizontal lines, and | for the vertical lines.
