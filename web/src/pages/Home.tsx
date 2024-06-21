import { Header } from '../components/Header';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme';

export const Home = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (

        <div className="home">
            <Header />
            <h1>Pagina inicial</h1>
            <button onClick={toggleTheme}>Mudar tema</button>
            <p>O tema atual e: {theme}</p>
        </div>
    )
};