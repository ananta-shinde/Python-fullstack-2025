

var root = document.getElementById("root")
fetch('https://dummyjson.com/posts')
.then(res=>res.json())
.then(res=>{
    var data = res 
    data.posts.forEach(post => {
        var postCard = `<div class="card">
    <h5>${post.title}</h5>
    <p>${post.body}<p>
    </div>`

    root.innerHTML = root.innerHTML + postCard
    });
    
   
})





