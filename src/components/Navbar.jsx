import { useNavigate } from "@solidjs/router";
import { createSignal, useContext } from "solid-js";
import { CurrentPageContext } from "../providers/CurrentPageProvider";

export default function Navbar(props) {

    const [routes, setRoutes] = createSignal([
        {
            path: "/posts", text: "Posts"
        },
        {
            path: "/users", text: "Users"
        },
        {
            path: "/profile", text: "Profile"   
        },
    ]);

    const [store, {setCurrentPage}] = useContext(CurrentPageContext);

    const navigate = useNavigate();
    
    return (
        <div class="navbar bg-base-200 rounded-xl">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">BettMates</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <For each={routes()}>{(route) =>
                        <li><a classList={{"active": route.text.toUpperCase() === store.currentPage}} onClick={() => {navigate(route.path); setCurrentPage(route.text.toUpperCase())}}> {route.text} </a></li>
                    }</For>
                </ul>
            </div>
        </div>
    );

}
