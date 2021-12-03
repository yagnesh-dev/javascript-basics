
addEventListener('click',()=>{
    console.log("Anywhere on page is clicked");
    document.getElementById("submit").addEventListener('click',()=>{
        console.log("Submit button is clicked")
    })
},true) // by default usecapture is false, so by default first only 'Anywhere on page is clicked' will be printed 
// when set to true it prints both the console , i.e it allows capturing/trickling which is flow from parent event to child