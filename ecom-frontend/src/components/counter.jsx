import { useState } from "react";

const Counter = () => {
    const[count,setCount]  = useState(0);
    return ( <div className="d-flex mx-2" style={{maxWidth:"25%"}}>
                <button className="btn btn-light" onClick={()=>{if(count>0)setCount(count-1)}}>-</button>
                <input type="text" className="form-control" value={count} readOnly/>
                <button className="btn btn-light" onClick={()=>{setCount(count+1)}}>+</button>
    </div> );
}
 
export default Counter;