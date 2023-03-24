import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const PostsContext = createContext();

export default function PostsProvider(props) {

    const [store, setStore] = createStore({
        posts: [
            {
                slug: "post-one",
                title: "Title one",
                annons: "Annons one",
                content: "Content one",
                userSlug: "user-one",
                user: "user one",
                date: "15.02.2023"
            },
            {
                slug: "post-two",
                title: "Title two",
                annons: "Annons two",
                content: "Content two",
                userSlug: "user-two",
                user: "user two",
                date: "15.02.2023"
            },
            {
                slug: "post-three",
                title: "Title three",
                annons: "Annons three",
                content: "Content three",
                userSlug: "user-three",
                user: "user three",
                date: "15.02.2023"
            }
        ]
    });

    const value = [
        store
    ];
    
    return (
        <PostsContext.Provider value={value}>
            {props.children}
        </PostsContext.Provider>
    );

}