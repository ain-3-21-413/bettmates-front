import { onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { RegistrationContext } from "../providers/RegistrationProvider";

export default function RegistrationPage(props) {

    const [store, { setFirstName, setLastName, setUsername, setPassword, setConfirmPassword }] = useContext(RegistrationContext);

    const initAttrs = {

    };

    onMount(() => {
        
    });

    const [attrs, setAttrs] = createStore(initAttrs);

    let input, button;

    return (
        <div 
            class="flex grow flex-col gap-2"
            classList={{
                "max-w-sm": attrs.size === "sm",
                "max-w-md": attrs.size === "md",
                "max-w-lg": attrs.size === "lg",
            }}  
        >
            <h1 class="text-3xl font-bold"> Registration </h1>
            <div class="flex flex-col gap-2">
                <TextInput placeholder="First name" valueSetter={setFirstName} />
                <TextInput placeholder="Last name" valueSetter={setLastName} />
                <hr />
                <TextInput placeholder="Username" valueSetter={setUsername} />
                <TextInput placeholder="Password" type="password" valueSetter={setPassword} />
                <TextInput placeholder="Confirm password" type="password" valueSetter={setConfirmPassword} />
                <Button name="Sign up" onClickHandler={store.onSignUpConfirm} />
            </div>
        </div>
    );

}
