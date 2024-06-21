import { useState, useEffect } from "react";
import { api } from "../services/api";
import {User} from "../interfaces/IUser";
import { AuthContextProps } from "../interfaces/IAuthContextProps";
import { SignInProps } from "../interfaces/ISignInProps";
import { AuthContext } from "../interfaces/IAuthContext";
import { Navigate } from "react-router-dom";




// Componente AuthProvider que provê o contexto de autenticação
export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    // Estado para armazenar os dados do usuário
    const [user, setUser] = useState<User | null>(null);

    // Efeito que carrega os dados do usuário do localStorage quando o componente é montado
    useEffect(() => {
        const loadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");

            if (storageToken && storageUser) {
                const userObject: User = JSON.parse(storageUser);
                setUser(userObject);
            }
        };

        loadingStoreData();
    }, []);

    // Função para fazer login
    const SignIn = async ({ email, password }: SignInProps): Promise<void> => {
        try {
            // Chama a API para autenticação
            const response = await api.post("/auth", {
                email,
                password
            });

            const { token } = response.data;

            if (response.data.error) {
                // Exibe mensagem de erro se houver algum problema na autenticação
                alert(response.data.error);
            } else {
                // Define os dados do usuário e atualiza o token de autenticação
                setUser(response.data.user);

                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                // Salva o token e os dados do usuário no localStorage
                localStorage.setItem("@Auth:token", token);
                localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
            }
        } catch (error) {
            // Exibe mensagem de erro se ocorrer um erro durante o processo de login
            console.error("Erro ao fazer login:", error);
        }
    };

    const signOut = () => {
        // const navigate = useNavigate()
        localStorage.clear();
        setUser(null);
        // navigate('/');

        return <Navigate to="/" />
    };
       

    // Retorna o contexto de autenticação com os valores necessários
    return (
        <AuthContext.Provider
            value={{
                user,
                Signed: !!user, // Indica se há um usuário logado
                SignIn, // Função para fazer login
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
