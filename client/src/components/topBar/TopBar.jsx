import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar(){
    const user = false;
    return(
        <div className = "top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/">Home</Link>
                    </li>

                    <li className="topListItem">
                    <Link className="link" to="/">MAP</Link>
                    </li>

                    <li className="topListItem">
                    <Link className="link" to="/">ABOUT</Link>
                    </li>

                    <li className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                    </li>

                    <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                    </li>

                    <li className="topListItem">
                    <Link className="link" to="/">LOGOUT</Link>
                    </li>
                        {user && "LOGOUT"}
                </ul>
            </div>

            <div className="topRight">

             {
                 user ? (
                    <img className="topImg" 
                    src="https://th.bing.com/th/id/OIP.28MpDrbE3W38IB-sldVLsQHaEz?pid=ImgDet&rs=1" 
                    alt="" />
                 ) : (
                     <ul className="topList">
                     <li className="topListItem">
                     <Link className="link" to="/login">LOGIN </Link>
                     </li>
                     <li className="topListItem">
                     <Link className="link" to="/register">REGISTER </Link>
                     </li>
                     </ul>
                 )
             }

                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}