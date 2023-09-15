import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Typed from "react-typed";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faThLa} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className="header-wraper">
        <div className="main-info">
            <h1>My Web Development and Websites Promotions</h1>
            <Typed
            className="typed-text"
            strings={["I am a software Developer", "Specialised on Frontend", "web Development", "and", "android Development"]}
            typeSpeed={40}
            backSpeed={60}
            loop       
            />
            <a href="#" className="btn-main-offer">Contact me on <br/> <FontAwesomeIcon icon={faPhone}/> 08035471868</a>
        
        </div>

    </div>
  );
}

export default Header;