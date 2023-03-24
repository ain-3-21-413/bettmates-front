import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const ProfileContext = createContext();

export default function ProfileProvider(props) {

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
    ]

    return (
        <ProfileContext.Provider value={value}>
            {props.children}
        </ProfileContext.Provider>
    );

}
