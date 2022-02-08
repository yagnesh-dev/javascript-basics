function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET',
        headers:{"Content-Type":"application/json"}
    }).then(res=>res.json())
}

function getUserPosts(userId){
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{
        method: "GET",
        headers :{ "Content-Type":"application/json"}
    }).then(res=>res.json())
}

getUsers().then(users=>{
    users.forEach(eachUser=>{
        getUserPosts(eachUser.id).then(posts=>{
            console.log("Basic id",posts.length)
            console.log("Basic name",eachUser.name)
        })
    })
   
})