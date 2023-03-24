import { useContext } from "solid-js";
import { AuthenticationContext } from "../providers/AuthenticationProvider";
import { LoginContext } from "../providers/LoginProvider";

export const useAuth = () => {

    const [loginStore] = useContext(LoginContext);

    const [authenticationStore, { setAuthenticated }] = useContext(AuthenticationContext);

    const login = () => {
        console.log({
            username: loginStore.username,
            password: loginStore.password
        });
        setAuthenticated(true);
    };

    return {login};

}
