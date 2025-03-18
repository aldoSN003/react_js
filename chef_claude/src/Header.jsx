import Logo from "./assets/chef.svg"

export default function Header() {
    return (
        <header className="shadow-md flex flex-row p-2 mb-9 justify-center items-center cursor-pointer">
            <img src={Logo} alt="" className={"h-12  "}/>
            <h1 className={""}>Chef Claude</h1>
        </header>
    );
}