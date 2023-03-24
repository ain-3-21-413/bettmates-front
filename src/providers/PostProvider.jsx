import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const PostContext = createContext();

export default function PostProvider(props) {

    const [store, setStore] = createStore({
       post: {
            title: "Title",
            content: "Content",
            date: "15.02.2023",
            userSlug: "user-one",
            user: "Username"
       },
    });

    const value = [
        store
    ];

    return (
        <PostContext.Provider value={value}>
            {props.children}
        </PostContext.Provider>
    );

}
