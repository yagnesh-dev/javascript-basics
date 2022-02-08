const fetchAllData=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(firstPromise=> firstPromise.json())
    .then(actualData=> document.getElementById('showContent').innerHTML = JSON.stringify(actualData))
}