function numberSplit(num) {

    return [Math.floor(num /2),Math.ceil(num/2)];
    
}

console.log(numberSplit(4)); //[2,2]
console.log(numberSplit(10));//[5,5]
console.log(numberSplit(11));//[5,6]
console.log(numberSplit(-9));;//[-5,-4]