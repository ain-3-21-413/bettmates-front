import { onMount } from "solid-js";
import { createStore } from "solid-js/store";

export default function Textarea(props) {

    const initAttrs = {
        placeholder: "Type here ...",
    };

    onMount(() => {
        if (props.placeholder) {
            setAttrs("placeholder", props.placeholder);
        };
        if (props.valueSetter) {
            textarea.addEventListener("input", (event) => props.valueSetter(event.target.value));
        };
    });

    let textarea;

    const [attrs, setAttrs] = createStore(initAttrs);
    
    return (
        <textarea ref={textarea} class="textarea textarea-bordered h-96" placeholder={attrs.placeholder}></textarea>
    );

}
