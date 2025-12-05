import { useState } from "react"

const LoginPage = () => {
    const [message,setMessage] = useState("")
    // var username = undefined
    // var password = undefined

    var formdata = {}


    // const handleUsernameChange = (event)=>{
    //     username = event.target.value
    // }
    // const handlePasswordChange = (event)=>{
    //     password = event.target.value
    // }

    const handleChange = (event)=>{
        if(event.target.name == "username")
        formdata.username = event.target.value
        // username= event.target.value
        if(event.target.name == "password")
        formdata.password = event.target.value
        // password = event.target.value
    }


    const handleSubmit = (event)=>{
       
        event.preventDefault()
        fetch("https://dummyjson.com/auth/login",{
            method:"post",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(formdata)
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.message){
                setMessage(res.message)
            }else{
                setMessage("")
            }
            
        })
    }
    return ( 
        <div className="container-fluid bg-light">
            <div className="row ">
                <div className="col-6 offset-3 d-flex " style={{height:"100vh"}}>
                    <form className="d-block p-3 w-50 bg-white shadow mx-auto my-auto h-50" method="post" onSubmit={handleSubmit}>
                        <h3 className="text-muted text-center">Login Here</h3>
                       { message != "" &&<p className="alert alert-danger">{message}</p>}
                       <input className="form-control my-3" type="text" placeholder="username" name="username" required onChange={handleChange}/>
                       <input className="form-control my-3" type="password" placeholder="password" name="password" required onChange={handleChange}/>
                        <input className="btn btn-dark w-100 my-3" type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;