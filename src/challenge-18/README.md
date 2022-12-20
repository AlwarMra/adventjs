# Challenge #18: We are running out of ink!

We are printing the barcodes for shipments at the Santa factory. We use a number stamping system where each digit is printed with a different ink. It is an old but reliable system. However, sometimes we run out of single-digit ink.

**Write a function that receives the digit for which we have no ink** (a number that will be from 0 to 9) and as a second parameter, **the number of barcodes to print** (we start from 1 up to this number that we receive).

**It must return an array with the numbers that include the number for which we have no ink.** Let's see an example:

```js
dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

// no tenemos tinta para el dígito 1
// tenemos que imprimir 15 códigos de barras del 1 al 15
// los códigos de barras que saldrán mal por falta de tinta son:
// 1, 10, 11, 12, 13, 14, 15

dryNumber(2, 20) // [2, 12, 20]

// no tenemos tinta para el dígito 2
// tenemos que imprimir 20 códigos de barras del 1 al 20
// los códigos de barras que saldrán mal por falta de tinta son:
// 2, 12, 20
```
