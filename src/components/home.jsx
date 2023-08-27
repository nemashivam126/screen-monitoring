import axios from "axios"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get("http://localhost:5000/dashboard")
        .then(res=>{
            console.log(res.data);
            for(let user of res.data){
                if(name === user.name && email === user.email){
                    navigate('/pc-monitoring');
                    break;
                } else{
                    setError("user does not exists")
                }
            }
        })
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
  return (
        <div>
            <div className="text-center container d-flex flex-wrap justify-content-center align-items-center" style={{height:"90vh"}}>
                <div className="d-flex flex-wrap justify-content-center bg-dark text-light p-4 rounded" style={{height:"300px", width:"300px"}}>
                    <h2>Get Start</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <input className="form-control mb-3" type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                        </div>
                        <div>
                            <input className="form-control mb-3" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                        </div>
                        <button className="btn btn-primary w-100" type="submit">Get Start</button>
                        <p className="text-danger">{error}</p>
                        <Link style={{display:error===""?"none":"block"}} to={'/register'}>Register here</Link>
                    </form>
                </div>
            </div>
        </div>
    
  )
}

export default Home