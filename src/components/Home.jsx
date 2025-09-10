import { Outlet,Link} from "react-router-dom";
import "../App.css"
import Logo from "../assets/LogoHome.jpeg"
function Home(){
    return(
        <>
        <header>
            <Link to="/" className="noStyle" ><div id="same"> <img src={Logo} height={55} width={70}></img>Home</div></Link>
            <Link to="/about" className="noStyle"><p>About</p></Link>
            <Link className="noStyle"><p>Contact Us</p></Link>
            <Link className="noStyle"><button className="login">Login</button></Link>
        </header>
        <Outlet/>
        <footer>
            &copy; 2025 User Cards Display System
        </footer>
        </>
    )
}
export default Home;