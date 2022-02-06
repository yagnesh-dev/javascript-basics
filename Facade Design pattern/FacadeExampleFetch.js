function getUsers(){
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId){
    return getFetch(`https://jsonplaceholder.typicode.com/posts`,{userId:userId})
}

getUsers().then(users=>{
    users.forEach(eachUser=>{
        getUserPosts(eachUser.id).then(posts=>{
            console.log("Fetch Eg id",posts.length)
            console.log("Fetch Eg name",eachUser.name)
        })
    })
   
})

function getFetch(url,param ={}){
    const queryString = Object.entries(param).map(subData=>{
        return `${subData[0]}=${subData[1]}`
    }).join('&')
    return fetch(`${url}?${queryString}`,{
        method: 'GET',
        headers:{"Content-Type":"application/json"}
    }).then(res=>res.json())
}