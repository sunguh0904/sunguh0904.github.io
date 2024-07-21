import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

const MainLayouts = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayouts;