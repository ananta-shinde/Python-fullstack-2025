var productList = []
if(localStorage.getItem("products")){
    productList = JSON.parse(localStorage.getItem("products"))
}
var root = document.getElementById("root")
root.innerHTML = navbar()+`<div id="main-content"></div>`
var mainContent = document.getElementById("main-content")
mainContent.innerHTML = viewProduct()

loadTableData()



function navbar(){
    return  `<div class="container">
    <nav class="navbar navbar-expand-lg">
            <h4 class="nav-brand">PMS</h4>
            <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" onclick="loadViewProduct()">View Products</a></li>
            <li class="nav-item"><a class="nav-link" onclick="loadAddProduct()">Add Product</a></li>
            </ul>
    </nav>
    </div> `
}

function addProductFrom(product){
   
    var response = `<div class="container">
    <form class="bg-light p-4 shadow" onsubmit ="handleSubmit(event)">
    <h4 class="text-muted">Add New Product Details</h4>
        <input class="form-control" type="text" placeholder="product name" name="name" value=""/>
        <textarea class="form-control" type="text" placeholder="product description" name="description"></textarea>
        <select class="form-control" name="category">
        <option>-- select category --</option>
            <option>Electronics</option>
            <option>Clothing</option>
        </select>
        <input class="form-control" type="number" placeholder="product mrp" name="mrp"/>
        <input class="btn btn-dark" type="submit" value="save product"/>
    </form>
</div>`

   if(product != undefined){
   response = `<div class="container">
    <form class="bg-light p-4 shadow" onsubmit ="handleUpdate(event)">
    <h4 class="text-muted">Product Details</h4>
        <input type="hidden" name="id" value="${product.id}"/>
        <input class="form-control" type="text" placeholder="product name" name="name" value="${product.name}"/>
        <textarea class="form-control" type="text" placeholder="product description" name="description" >${product.description}</textarea>
        <select class="form-control" name="category" value="${product.category}" >
            <option value="">-- select category --</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
        </select>
        <input class="form-control" type="number" placeholder="product mrp" name="mrp" value="${product.mrp}"/>
        <input class="btn btn-dark" type="submit" value="save product"/>
    </form>
</div>`
   }
    return response
}

function viewProduct(){
    return `
    <div class="container">
    <h4 class="text-muted">product list :</h4>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">description</th>
      <th scope="col">category</th>
      <th scope="col">mrp</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody id="table-data">
   
  </tbody>
</table>
</div>
    `
}




function loadAddProduct(){
    mainContent.innerHTML = addProductFrom()
}

function loadViewProduct(){
    window.location.reload()
    mainContent.innerHTML = viewProduct()
}

function handleSubmit(event){
    event.preventDefault()
    const formdata = new FormData(event.target)
    var product = {}
    product.id = productList.length+1
    product.name = formdata.get("name")
    product.description = formdata.get("description")
    product.category = formdata.get("category")
    product.mrp = formdata.get("mrp")
    productList.push(product)
    localStorage.setItem("products",JSON.stringify(productList))

}

function handleUpdate(event){
    event.preventDefault()
    const formdata = new FormData(event.target)
    var productId = formdata.get("id")
    productList.forEach(p=>{
        if(p.id == productId){
            p.name = formdata.get("name")
            p.description = formdata.get("description")
            p.category = formdata.get("category")
            p.mrp = formdata.get("mrp")
        }
    })
    localStorage.setItem("products",JSON.stringify(productList))
    loadViewProduct()
}

function loadTableData(){
    var tableData = document.getElementById("table-data")
    productList.forEach(p => {
        var tablerow = document.createElement("tr")
        var tabledata = document.createElement("td")
        tabledata.innerText = p.id
        tablerow.appendChild(tabledata)
        var tabledata = document.createElement("td")
        tabledata.innerText = p.name
        tablerow.appendChild(tabledata)
        var tabledata = document.createElement("td")
        tabledata.innerText = p.description
        tablerow.appendChild(tabledata)
        var tabledata = document.createElement("td")
        tabledata.innerText = p.category
        tablerow.appendChild(tabledata)
        var tabledata = document.createElement("td")
        tabledata.innerText = p.mrp
        tablerow.appendChild(tabledata)
        var tabledata = document.createElement("td")
        var viewBtn = document.createElement("button")
        viewBtn.innerText = "view"
        viewBtn.className = "btn btn-info"
        viewBtn.setAttribute("name",p.id)
        viewBtn.addEventListener("click",productClick)
        tabledata.appendChild(viewBtn)
        tablerow.appendChild(tabledata)
        tableData.appendChild(tablerow)
    });
}

function getProductById(id){
    var product = undefined
    productList.forEach(p=>{
        
        if(p.id == id){
            product = p
        }
    })
    return product
}

function productClick(event){
    var productId = event.target.name
    var product = getProductById(productId)
    // var content = mainContent.innerHTML
    // content=content+`<div class="popup">${addProductFrom(product)}</div>`
    mainContent.innerHTML =addProductFrom(product)
}