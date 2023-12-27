async function promiseTimeout(ms) {

    // await console.log("Task 1");    

    return new Promise ((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run(){
    //logic
    console.log("Start!!");
    //try take of await and compare
    await promiseTimeout(2000);
    console.log("Stop!!");
}
console.log("Beging!!");

run();
console.log("End!!");
