import { useContext } from "solid-js";
import Button from "../components/Button";
import Textarea from "../components/Textarea";
import TextInput from "../components/TextInput";
import { EditorContext } from "../providers/EditorProvider";
import { ProfileContext } from "../providers/ProfileProvider";

export default function EditorPage(props) {

    const [userStore] = useContext(ProfileContext);

    const navigate = useContext();

    const [editorStore, { setTitle, setContent }] = useContext(EditorContext);

    const onSaveClick = () => {
        console.log({
            title: editorStore.post.title,
            content: editorStore.post.content,
            username: userStore.user.username   
        });
    };

    return (
        <div class="flex grow flex-col gap-5 py-5">
            <h1 class="text-3xl font-bold text-center"> New Post </h1>
            <div class="flex flex-col gap-2">
                <TextInput placeholder="Title" valueSetter={setTitle} />
                <Textarea valueSetter={setContent} />
                <Button name="Save" onClickHandler={onSaveClick} />
            </div>
        </div>
    );

}
