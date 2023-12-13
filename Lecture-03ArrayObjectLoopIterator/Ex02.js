let furntiure = ['Table','Chairs','Couch'];

let iterator = furntiure[Symbol.iterator]();

while (true) {

    let result = iterator.next();

    if (result.done)break;
    for (char of result.value){
        console.log(char);
    }
    console.log("\n"); 
}
