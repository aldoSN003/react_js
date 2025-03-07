import SideBar from "./components/Sidebar.jsx";
import {
    LifeBuoy, Receipt, Boxes, Package
} from "lucide-react";
import {SideBarItem} from "./components/Sidebar.jsx";

export default function Home() {
    return (
        <div>

                <SideBar>
                    <SideBarItem icon={<LifeBuoy size={20} />} text="Help" active={true} alert={false} />
                    <SideBarItem icon={<Receipt size={20} />} text="Invoices" active={false} alert={true} />
                    <SideBarItem icon={<Boxes size={20} />} text="Products" active={false} alert={false} />
                    <SideBarItem icon={<Package size={20} />} text="Orders" active={false} alert={true} />
                </SideBar>

        </div>
    );
}