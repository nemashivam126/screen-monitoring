import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await axios.post("http://localhost:5000/register", {
                    name,
                    email,
                    password
                });

                if(response.status === 201){
                    console.log("Registration successful");
                    navigate("/pc-monitoring");
                } else{
                    console.log("Registration failed");
                }
            } catch (error) {
                console.error("An error occurred during login:", error);
        }
    };
    const handleEmailCheck = (e) => {
        axios.get("http://localhost:5000/dashboard")
        .then(res=>{
            // console.log(res.data);
            for(let user of res.data){
                if(email === user.email){
                    setError('email already exists')
                    setFlag(true)
                    break;
                } else{
                    setError("email available")
                    setFlag(false)
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
    const handlePwdChange = (e) => {
        setPassword(e.target.value)
    }
  return (
    <div>
        <div className="container d-flex justify-content-center text-light">
            <div className="d-flex justify-content-center flex-column align-items-center my-5 rounded-3 p-4 bg-dark">
                    <div className="h2">Register User</div>
                    <form onSubmit={handleSubmit} className="form">
                        <dl>
                            <dt>Name</dt>
                            <dd><input onChange={handleNameChange} className="form-control" type="text" /></dd>
                            <dt>Email</dt>
                            <dd><input onChange={handleEmailChange} onKeyUp={handleEmailCheck} className="form-control" type="email" />
                            <p className={flag?'text-danger m-0':'text-success m-0'}>{error}</p>
                            </dd>
                            <dt>Password</dt>
                            <dd><input onChange={handlePwdChange} className="form-control" type="password" /></dd>
                        </dl>
                        <button disabled={flag} className="btn btn-primary w-100">Register</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Register