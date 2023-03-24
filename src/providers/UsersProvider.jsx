import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const UsersContext = createContext();

export default function UsersProvider(props) {

    const [store, setStore] = createStore({
        users: [
            {
                username: "Username",
                firstName: "firstNam ",
                lastName: "lastNam",
                slug: "user-one",
                postsQty: 15
            },
            {
                username: "Username",
                firstName: "firstName",
                lastName: "lastName",
                slug: "user-two",
                postsQty: 10
            },{
                username: "Username",
                firstName: "firstName",
                lastName: "lastName",
                slug: "user-three",
                postsQty: 20
            },
        ]
    });

    const value = [
        store
    ];

    return (
        <UsersContext.Provider value={value}>
            {props.children}
        </UsersContext.Provider>
    );

}
