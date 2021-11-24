function onSuccess(){
    console.log("Its a onSuccess call");
}

function onError(){
    console.log("Its a onError call")
}

var promise = new Promise((resolve,reject)=>{ //This defination makes it in pending state by default
    resolve();
    //reject();
})

promise.then(onSuccess);//Call successfully
promise.catch(onError);// call failed