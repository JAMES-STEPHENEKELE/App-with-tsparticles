
import logo from "../assets/logo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThList} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faThList} style={{color: "#fff"}} />

            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html"><button type="button" className="btn btn-primary">Home</button><span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button type="button" className="btn btn-primary">About me</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button type="button" className="btn btn-primary">Services</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button type="button" className="btn btn-primary">Portfolio</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button type="button" className="btn btn-primary">Contacts</button></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;