var a = 30;

function outerTwo(){
    var b = 40;

    var inner = function(){//remembers where its variable is pointing to
        a++;
        b++;
        console.log(a);
        console.log(b);
    };
    return inner;
}

var innerFnTwo = outerTwo();

innerFnTwo();

var innerFn2 = outerTwo();

innerFn2();