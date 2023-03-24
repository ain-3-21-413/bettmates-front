import { useContext } from "solid-js";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { useAuth } from "../hooks/useAuth";
import { LoginContext, LoginProvider } from "../providers/LoginProvider";

export default function LoginPage(props) {

    const [store, { setUsername, setPassword }] = useContext(LoginContext);

    const { login } = useAuth();

    return (
        <LoginProvider>
            <div class="flex flex-col h-screen justify-center gap-4 px-96">
                <h1 class="text-3xl font-bold"> Login </h1>
                <div class="flex flex-col gap-2">
                    <TextInput placeholder="Username" valueSetter={setUsername} />
                    <TextInput placeholder="Password" type="password" valueSetter={setPassword} />
                    <Button name="Login" onClickHandler={login} />
                </div>
            </div>
        </LoginProvider>
    );
    
}