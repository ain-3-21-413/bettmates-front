import { onMount } from "solid-js";
import { createStore } from "solid-js/store";

export default function Button(props) {

    const initAttrs = {
        name: "Button",
        isCircle: false,
    }

    onMount(() => {
        if (props.name) {
            setAttrs("name", props.name);
        };
        if (props.onClickHandler) {
            button.addEventListener("click", props.onClickHandler)
        };
        if (props.circle) {
            setAttrs("isCircle", true)
        };
    });

    let button;

    const [attrs, setAttrs] = createStore(initAttrs);

    return (
        <button 
            ref={button} 
            class="block btn btn-primary"
            classList={{
                "btn-circle": attrs.isCircle,
            }}
        > {attrs.name} </button>
    );
}
