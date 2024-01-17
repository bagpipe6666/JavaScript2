function highestDigit(nums,num) {

    let result = [];


    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let result = num.split("");
        console.log(result);
    }

}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
