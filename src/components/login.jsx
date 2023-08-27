import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const storageToken = localStorage.getItem('token');
        if (storageToken) {
            navigate("/pc-monitoring");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await axios.post("http://localhost:5000/login", {
                    email,
                    password
                });

                if(response.status === 200){
                    console.log(response.status);
                    navigate("/pc-monitoring");
                    const data = response.data;
                    setToken(data.token)
                    localStorage.setItem("token", data.token);
                } else{
                    console.log("Login failed");
                }
            } catch (error) {
                console.error("An error occurred during login:", error);
        }
    };

    return (
        <div>
            <div className="text-center container d-flex flex-wrap justify-content-center align-items-center" style={{height:"90vh"}}>
                <div className="d-flex flex-wrap justify-content-center bg-dark text-light p-4 rounded" style={{height:"300px", width:"300px"}}>
                    <h2>Login</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <input className="form-control mb-3" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input className="form-control mb-3" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
