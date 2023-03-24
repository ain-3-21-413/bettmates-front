import { createContext, onMount } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentPageContext = createContext();

export default function CurrentPageProvider(props) {

    const [store, setStore] = createStore({
        currentPage: "POSTS",
    });

    onMount(() => {
        setStore("currentPage", (location.href.split('/')[3].toUpperCase()));
    });

    const value = [
        store,
        {
            setCurrentPage(page) {
                setStore("currentPage", page);
            }
        }
    ]

    return (
        <CurrentPageContext.Provider value={value}>
            {props.children}
        </CurrentPageContext.Provider>
    )

}
