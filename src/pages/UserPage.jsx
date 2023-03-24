import { useContext } from "solid-js";
import PostCard from "../components/PostCard";
import { PostsContext } from "../providers/PostsProvider";
import { UserContext } from "../providers/UserProvider";

export default function UserPage(props) {

    const [userStore] = useContext(UserContext);

    const [postsStore] = useContext(PostsContext);

    return (
        <div class="flex grow flex-col py-5 gap-5">
            <div class="flex flex-col gap-1 justify-center">
                <h1 class="text-3xl font-bold text-center"> {userStore.user.username} </h1>
                <span class="text-center text-base-content/50"> {userStore.user.firstName} {userStore.user.lastName} </span>
            </div>
            <div class="flex flex-col gap-4">
                <For each={postsStore.posts}>{(post) =>
                    <PostCard post={post} />
                }</For>
            </div>
        </div>
    );

}
