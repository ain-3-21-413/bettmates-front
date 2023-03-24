import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const UserContext = createContext();

export default function UserProvider(props) {

    const [store, setStore] = createStore({
        user: {
            username: "Username",
            firstName: "firstName",
            lastName: "lastName",
            slug: "user-one",
            postsQty: 10
        }
    });

    const value = [
        store
    ];

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );

}
