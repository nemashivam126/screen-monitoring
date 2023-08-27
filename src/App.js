import { Link, useNavigate } from "react-router-dom";
import { ScreenRec } from "./components/screenRec";
import { VideoRec } from "./components/videoRec";

function App() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    return navigate('/login')
  };

  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand navbar-light bg-secondary">
        <div className="navbar-nav mx-3">
          <Link to="/" className="nav-link"><b>Home</b></Link>
          <Link to="/pc-monitoring" className="nav-link"><b>PC Monitoring</b></Link>
          <Link to="/login" className="nav-link"><b>Login</b></Link>
          <button className="btn btn-danger position-absolute end-0 me-3" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="row d-flex">
        <div className="col-2">
          <VideoRec />
        </div>
        <div className="col">
          <ScreenRec />
        </div>
      </div>
    </div>
  )
}

export default App;