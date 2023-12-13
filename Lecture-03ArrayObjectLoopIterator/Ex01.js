let vaule1 = ['Apple','1',false];
let vaule2 = ['Fries','2',true];
let vaule3 = ['Mars','9','Apple'];

let elements = vaule1.concat(vaule2.concat(vaule3));


for (let i = 0; i < elements.length; i++) { 
    for(let j = i+1 ;j < elements.length ; j++){
        if(elements[i] === elements[j]){
            console.log(elements[i]);
    }
    }
}
