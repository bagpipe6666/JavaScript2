// function simplePair(mul ,x){
//     for (let index = 0; index < mul.length; index++) {
//         const element = mul[index];
//         console.log(element);
        

//     }
// }


// console.log(simplePair([1,2,3],3));
// console.log(simplePair([1,2,3,6],6));
// console.log(simplePair([1,2,3],9));
function simplePair(arr, target) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

console.log(simplePair([1,2,3], 3));   // [[1,3]]
console.log(simplePair([1,2,3,6], 6)); // [[2,3], [1,6]]
console.log(simplePair([1,2,3,3], 9)); 
