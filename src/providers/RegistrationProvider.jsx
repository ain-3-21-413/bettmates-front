import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const RegistrationContext = createContext();

export default function RegistrationProvider(props) {

    const [store, setStore] = createStore({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        onSignUpConfirm: () => {
            console.log({
                firstName: store.firstName,
                lastName: store.lastName,
                username: store.username,
                password: store.password,
                confirmPassword: store.confirmPassword,
            });
        }
    })

    const registration = [
        store,
        {
            setFirstName(firstName) {
                setStore("firstName", firstName);
            },
            setLastName(lastName) {
                setStore("lastName", lastName);
            },
            setUsername(username) {
                setStore("username", username);
            },
            setPassword(password) {
                setStore("password", password);
            },
            setConfirmPassword(confirmPassword) {
                setStore("confirmPassword", confirmPassword);
            },
        }
    ];
    
    return (
        <RegistrationContext.Provider value={registration}>
            {props.children}
        </RegistrationContext.Provider>
    );

}
