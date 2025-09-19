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

function addProductFrom(){
    return `<div class="container">
        <form class="bg-light p-4 shadow" onsubmit ="handleSubmit(event)">
        <h4 class="text-muted">Add New Product Details</h4>
            <input class="form-control" type="text" placeholder="product name" name="name"/>
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
        tableData.appendChild(tablerow)
    });
}