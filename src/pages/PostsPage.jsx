import { For, onMount, useContext } from "solid-js";
import PostCard from "../components/PostCard";
import { PostsContext } from "../providers/PostsProvider";

export default function PostsPage(props) {

    const [store] = useContext(PostsContext);

    onMount(() => {

    });

    return (
        <div class="flex grow flex-col gap-5 py-5">
            <h1 class="text-3xl font-bold"> Posts </h1>
            <div class="flex flex-col gap-4 justify-items-center">
                <For each={store.posts}>{(post) =>
                    <PostCard post={post} />
                }</For>
            </div>
        </div>
    );

}
