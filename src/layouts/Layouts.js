import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import GNB from "../common/GNB";

const Layouts = () => {
    return (
        <>
            <Header />
            <GNB />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layouts;