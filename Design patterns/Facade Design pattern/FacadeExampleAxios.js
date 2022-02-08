function getUsers(){
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId){
    return getFetch(`https://jsonplaceholder.typicode.com/posts`,{userId:userId})
}

getUsers().then(users=>{
    users.forEach(eachUser=>{
        getUserPosts(eachUser.id).then(posts=>{
            console.log("Axios Eg id",posts.length)
            console.log("Axios Eg name",eachUser.name)
        })
    })
   
})

function getFetch(url,param ={}){
    return axios({
        url : url,
        method: 'GET',
        params: param
    }).then(res=>res.data)
}