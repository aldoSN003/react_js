import "./../index.css"
import Globe from "../assets/Globe.svg"

export default function Header() {
    return (
        <header className="navbar">
            <img src={Globe} alt="globe icon "/>
            <h1 className={"navbar_title"}>
                my travel journal.
            </h1>
        </header>
    );
}
