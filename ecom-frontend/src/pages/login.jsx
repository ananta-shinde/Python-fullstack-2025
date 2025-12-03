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
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <form method="post" onSubmit={handleSubmit}>
                       { message != "" &&<p>{message}</p>}
                        <input type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default LoginPage;