let x = 90
let y = 7

function addtwo(){
    let z = x + y
    return z
}

const productPrices = [25.99, 15.49, 10.99, 34.99, 8.99]

//arrange from highest to lowest
function arrangeHL(){
    return productPrices.sort((a,b)=>a-b).reverse()
}

let prices = [25.99, 15.49, 10.99, 34.99, 8.99];
let sum = 0;

for (let i = 0; i <prices.length; i++) {
    sum += prices[i];
}

const price = [25.99, 15.49, 10.99, 34.99, 8.99];

const roundedAndDivisibleBy3 = prices.filter(price => Math.ceil(price) % 3 === 0);

console.log(roundedAndDivisibleBy3);
