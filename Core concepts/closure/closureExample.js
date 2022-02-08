var a =10;
function outer(){
    var b = 20;

    var inner = function(){
        console.log(a);
        console.log(b);
    }
    return inner;
}
var innerFn = outer();

innerFn();//remembers b because inner function was return with its scope , this concept is closure