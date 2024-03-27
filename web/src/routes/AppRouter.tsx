import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Home } from "../pages/Home";
import { PrivateRoute } from "./privateRoutes";


export const AppRouter = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Login />} />;
                <Route path="/register" element={<Register />} />;
                {/* só vai deixar entrar na conta se o user estiver logado, caso nao haja
                mais o token ele nao deixa ficar logado */}
                <Route path="/home" element={<PrivateRoute />}>
                    <Route path="/home" element={<Home/>} />;
                </Route>
            </Routes>
        </Router>

    );
};