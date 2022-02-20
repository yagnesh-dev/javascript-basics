
console.log("Closure 3 example")
let x = 10;
function foo(a){
    console.log("foo a",a)
    let b = 20;
    function bar(c){
        console.log("bar b",b)
        let d = 30;
        return boop(x + a + b + c + d);
    }

    function boop(e){
        console.log("boop e",e)
        return e * -1;
    }
    return bar;
}

let moar = foo(5); // closure

/* 
  The function below executes the function bar which was returned 
  when we executed the function foo in the line above. The function bar 
  invokes boop, at which point bar gets suspended and boop gets push 
  onto the top of the call stack (see the screenshot below)
*/
moar(15);