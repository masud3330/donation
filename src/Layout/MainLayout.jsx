import { Outlet } from "react-router-dom";
import Navabr from "../Navbar/Header/Navbar/Navabr";
import Logo from "../Navbar/Logo/Logo";



const MainLayout = () => {
    return (
        <div>
            <div  className="flex justify-between items-center md:mx-12 mx-5 shadow-sm p-2">
            <Logo></Logo>
            <Navabr></Navabr>
            </div>
            
            <div>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;