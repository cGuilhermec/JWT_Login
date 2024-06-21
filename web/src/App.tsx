import { AuthProvider } from './context/auth';
import { AppRouter } from './routes/AppRouter';
import { ThemeProvider } from './context/theme';
import { useContext } from 'react';
import { ThemeContext } from './context/theme';

import './styles/App.css'

function App() {

  const {theme} = useContext(ThemeContext);

  console.log(theme);

  return (
    <AuthProvider>
      <ThemeProvider>
        <div className={`App ${theme === 'dark' ? 'dark-theme': '' }`}>
          <AppRouter />
        </div>     
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
