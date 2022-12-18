# Challenge #15: Decorating the christmas tree

## 📖 Instructions

A couple is putting up the Christmas tree. The boy is a fan of Christmas decorations and wants it to be perfectly balanced. He has three types of decorations:

**- colored balls: B**
**- Small gifts: R**
**- pine cones: P**

The Christmas tree is a triangle that must be generated. They already have the base assembled, which would be the first row, **and from there they have to place the decorations upwards following a formula.**

```js
Up    :     P     R     B     P
If    :    P P   B P   R P   B R
```

Combinations are not sorted. For instance, if below is B P, above is R. But it will also be R if below is P B. Also, if below you have the same letter twice, above will be the same letter. For example, if down is B B, up is B.

With these rules, we could see the tree that we would generate with the base B P R P:

```js
   R
  P B
 R B B
B P R P
```

Write a program that takes a string y gives back an array with tree decorations.

```js
decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']
```

## Keep in mind:

- The program always receives a string.
- The output has to be the complete tree, that is, the base and the rows generated from it.
- The formula has to be followed to know which decoration to place in each position.
