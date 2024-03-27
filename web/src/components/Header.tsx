import { Link } from "react-router-dom"
import '../styles/header.css';
import { AuthContext } from "../interfaces/IAuthContext";
import { useContext } from "react";

export const Header = () => {

    const { signOut } = useContext(AuthContext);

    const handleSignOut = async () => {
        // Chama a função de signOut
        await signOut();
    };

    return (
        <div className="container">
            <div className="logo">Logo</div>
            <div className="navBar">
                <Link className="btn" to='/' >Teste</Link>
                <Link className="btn" to='/' >Menu</Link>
                <Link className="btn" to='/' >Configurações</Link>
                <button type='button' className="btn" onClick={handleSignOut} >Logout</button>
            </div>
        </div>
    );
};
