import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../views/Home";
import Header from "../header/header";
import PropertiesDetails from "../views/PropertiesDetails";

function AppRoute() {
    return (
        <div>
            <Router>
                <Header />
                <main className='main-container'>
                    <ToastContainer />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/seller" element={<div>dvfv</div>} />
                        <Route path="/favorite" element={<div>vghvvhh</div>} />
                        <Route path="/property_details" element={<PropertiesDetails/>} />
                    </Routes>
                </main>
            </Router>

        </div>
    );
}

export default AppRoute;
