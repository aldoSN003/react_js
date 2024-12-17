import "./../index.css"
import logo from "./../assets/react.svg";

export default function Navbar() {
    return (
        <header>
            <nav>

                <img src={logo} alt=""/>
                <span className={"heading_navbar"}> React facts</span>




            </nav>
        </header>
    );
}