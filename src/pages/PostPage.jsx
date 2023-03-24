import { useNavigate } from "@solidjs/router";
import { onMount, useContext } from "solid-js";
import { CurrentPageContext } from "../providers/CurrentPageProvider";
import { PostContext } from "../providers/PostProvider";

export default function PostPage(props) {

    const [store] = useContext(PostContext);

    const navigate = useNavigate();

    const [currentPageStore, {setCurrentPage}] = useContext(CurrentPageContext);

    onMount(() => {
        
    })

    return (

        <div class="flex grow flex-col gap-5 py-5">
            <h1 class="text-3xl font-bold text-center"> {store.post.title} </h1>
            <p class="text-left">
                {store.post.content}
            </p>
            <div class="flex justify-end gap-5">
                <a class="hover:underline cursor-pointer" onClick={() => {navigate("/users/" + store.post.userSlug); setCurrentPage("USER")}}> {store.post.user} </a>
                <a> {store.post.date} </a>
            </div>
        </div>

    );

}
