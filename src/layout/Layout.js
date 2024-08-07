import { Outlet } from "react-router-dom";
import Header from "../common/Header"
import Side from "../common/Side";

const Layout = () => {
    return (
        <>
            <Header />
            <Side />
            <Outlet />
        </>
    )
}

export default Layout;