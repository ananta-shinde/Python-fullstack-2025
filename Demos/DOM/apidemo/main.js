

var root = document.getElementById("root")
var user = {}
loadPostFeed()
function loadPostFeed(){
    fetch('https://dummyjson.com/posts')
.then(res=>res.json())
.then(res=>{
    var data = res 
    data.posts.forEach(post => {
        // var user = fetchUserDetailsById(post.userId)
        // console.log(user)
        var postCard = `<div class="card p-4">
    <h5>${post.title}</h5>
    <p>${post.body}<p>
    <div class="d-flex">  
        <p>likes : ${post.reactions.likes}</p>
        <p class="ms-3">dislikes : ${post.reactions.dislikes}</p>
        <p class="ms-3">views : ${post.views}</p>
    </div>
    </div>`

    root.innerHTML = root.innerHTML + postCard
    });
})
}

function  fetchUserDetailsById(id){
    
   const user  = fetch("https://dummyjson.com/users/"+id).then(res=>res.json()).then(res=>{return res})
   
    return user
}









