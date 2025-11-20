import CartProductCard from "../components/CartProductCard";
import Counter from "../components/counter";
import BaseTemplate from "../components/templates/base";
import Titlebar from "../components/titlebar";

const Cart = () => {
    return ( <div className="container">
      <div className="row p-4">
        
        <div className="col">
        <h4 className="text-muted">Products(5)</h4>
        <hr />
          <CartProductCard product={ {
         "id":1,
         "name":"my first product",
         "description":"description",
         "image_url" :"demo",
         "mrp":10000
        }}/>
          
        </div>
        <div className="col-3">
          <h4 className="text-muted">Summary</h4>
          <hr />
          <p>Sub Total :</p>
          <p>Discount :</p>
          <p>Shiping charges :</p>
          <hr></hr>
          <p className="fs-2 fw-bold">Total : 45000</p>
          <hr></hr>
          <button className="btn btn-dark w-100">Checkout</button>
        </div>
      </div>
    </div> );
}
 
export default Cart;