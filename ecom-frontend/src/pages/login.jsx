import { useState } from "react"

const LoginPage = () => {
    const [message,setMessage] = useState("")
    const handleSubmit = (event)=>{
       
        event.preventDefault()
        fetch("https://dummyjson.com/auth/login",{
            method:"post",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                username:"jshjdhjsdj",
                password : "1212112"
            })
        })
        .then(res=>res.json())
        .then(res=>{
            setMessage(res.message)
        })
    }
    return ( 
        <div className="container-fluid bg-light">
            <div className="row ">
                <div className="col-6 offset-3 d-flex " style={{height:"100vh"}}>
                    <form className="d-block p-3 w-50 bg-white shadow mx-auto my-auto h-50" method="post" onSubmit={handleSubmit}>
                        <h3 className="text-muted text-center">Login Here</h3>
                       { message != "" &&<p className="alert alert-danger">{message}</p>}
                       <input className="form-control my-3" type="email" placeholder="username"/>
                       <input className="form-control my-3" type="password" placeholder="password"/>
                        <input className="btn btn-dark w-100 my-3" type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;