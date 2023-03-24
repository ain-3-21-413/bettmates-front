import { useNavigate } from "@solidjs/router";
import { createSignal, onMount, Show, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { CurrentPageContext } from "../providers/CurrentPageProvider";

export default function PostCard(props) {

    const navigate = useNavigate();

    const [store, {setCurrentPage}] = useContext(CurrentPageContext);

    const initAttrs = {
        isEditable: false,
    }

    onMount(() => {
        if (props.editable) {
            setAttrs("isEditable", props.editable);
        };
    })

    const [post] = createSignal(props.post);

    const [attrs, setAttrs] = createStore(initAttrs);

    return (
        <div class="p-4 bg-base-200 rounded-xl flex flex-col">
            <div class="flex justify-between text-base-content/50">
                <a class="hover:text-base-content/100 cursor-pointer" onClick={() => {navigate("/users/" + post().userSlug); setCurrentPage("USER");}}>
                    {post().user}
                </a>
                <a>
                    {post().date}
                </a>
            </div>
            <a class="text-xl font-semibold hover:text-primary cursor-pointer" onClick={() => {navigate("/posts/" + post().slug); setCurrentPage("POST")}}>
                {post().title}
            </a>
            <p class="">
                {post().annons}
            </p>
            <Show when={attrs.isEditable}>
                <div class="flex justify-end">
                    <a class="text-primary underline cursor-pointer hover:underline-0" onClick={() => {navigate("/editor/" + post().slug); setCurrentPage("EDITOR");}}>Edit</a>
                </div>
            </Show>
        </div>
    );

}
