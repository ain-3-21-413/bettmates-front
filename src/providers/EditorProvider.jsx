import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const EditorContext = createContext();

export default function EditorProvider(props) {

    const [store, setStore] = createStore({
        post: {
            title: "",
            content: ""
        }
    });

    const value = [
        store,
        {
            setTitle(title) {
                setStore("post", "title", title);
            },
            setContent(content) {
                setStore("post", "content", content);
            }
        }
    ]
    
    return (
        <EditorContext.Provider value={value}>
            {props.children}
        </EditorContext.Provider>
    );

}
