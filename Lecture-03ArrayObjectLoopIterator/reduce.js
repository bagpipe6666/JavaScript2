const arrayOfNumbers = [5,10,15,20] ;

const sum = arrayOfNumbers.reduce((accumulator , currentValue) => {
    
    return accumulator + currentValue;
});

console.log(sum); //50