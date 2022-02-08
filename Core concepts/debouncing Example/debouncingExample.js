//Debouncing in javascript
let counter = 0
const getData = () =>{
  //Calls an API and gets Data
  console.log("Fetching data...", counter++)  
}
const debounce = function(fn,d){
    let timer;
    return function() {
        let context = this,args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },d);
    }
}

const betterFunction = debounce(getData,300);