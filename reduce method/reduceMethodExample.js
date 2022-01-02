const arr = [8,5,3,7,4,9];
const reduceExample = arr.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
})
document.getElementById('showContent').innerHTML = `<p>Array : ${arr}</p>
                                                     <p>reduce Method o/p : ${reduceExample}</p>`;