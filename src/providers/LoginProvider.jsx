import { children, createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { useAuth } from "../hooks/useAuth";
import { login } from "../services/auth.service";

export const LoginContext = createContext();

export function LoginProvider(props) {

    const [store, setStore] = createStore({
        username: "",
        password: ""
    });

    const login = [
        store,
        {
            setUsername(username) {
                setStore("username", username);
            },
            setPassword(password) {
                setStore("password", password);
            }
        }
    ];

    return (
        <LoginContext.Provider value={login}>
            {props.children}
        </LoginContext.Provider>
    );

}
