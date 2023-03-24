import { useNavigate } from "@solidjs/router";
import { useContext } from "solid-js";
import Button from "../components/Button";
import PostCard from "../components/PostCard";
import { CurrentPageContext } from "../providers/CurrentPageProvider";
import { PostsContext } from "../providers/PostsProvider";
import { ProfileContext } from "../providers/ProfileProvider";

export default function ProfilePage(props) {

    const [userStore] = useContext(ProfileContext);

    const [postsStore] = useContext(PostsContext);

    const [store, {setCurrentPage}] = useContext(CurrentPageContext);

    const navigate = useNavigate();

    const openEditor = () => {
        navigate("/editor");
        setCurrentPage("Editor");
    };

    return (

        <div>
            <div class="flex grow flex-col py-5 gap-5">
            <div class="flex flex-col gap-1 justify-center">
                <h1 class="text-3xl font-bold text-center"> {userStore.user.username} </h1>
                <span class="text-center text-base-content/50"> {userStore.user.firstName} {userStore.user.lastName} </span>
            </div>
            <div class="flex justify-end">
                <Button onClickHandler={openEditor} name="+" circle />
            </div>
            <div class="flex flex-col gap-4">
                <For each={postsStore.posts}>{(post) =>
                    <PostCard post={post} editable />
                }</For>
            </div>
        </div>
        </div>

    );

}
