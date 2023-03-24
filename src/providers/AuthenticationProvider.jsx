import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const AuthenticationContext = createContext();

export default function AuthenticationProvider(props) {

    const [store, setStore] = createStore({
        isAuthenticated: false,
    });

    const value = [
        store,
        {
            setAuthenticated(isAuthenticated) {
                setStore("isAuthenticated", isAuthenticated);
            }
        }
    ]

    return (
        <AuthenticationContext.Provider value={value}>
            {props.children}
        </AuthenticationContext.Provider>
    );

}
