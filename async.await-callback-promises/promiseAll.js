const promise1 = Promise.resolve('Promise 1 complete');
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 complete")
    },2000)
});

promise1.then((result) => console.log(result));
promise2.then((result) => console.log(result));

//Promise.all([promise1,promise2]).then(result=>console.log(result)); // returns all promises together
//Promise.race([promise1,promise2]).then(result=>console.log(result)); // returns first promise result only

//Generator function helps to pause a function
//Defination
// function* generatorFunc(){
//     let data = getData();
//     yield data;
//     console.log("data",data)

// }