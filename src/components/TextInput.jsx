import { onMount } from "solid-js";
import { createStore } from "solid-js/store";

export default function TextInput(props) {

    const initValue = {
        placeholder: "Type here",
        type: "text",
    };

    onMount(() => {
        if (props.placeholder) {
            setAttrs("placeholder", props.placeholder);
        };
        if (props.type) {
            setAttrs("type", props.type);
        };
        if (props.valueSetter) {
            input.addEventListener("input", (event) => props.valueSetter(event.target.value));
        };
    });
    
    let input;

    const [attrs, setAttrs] = createStore(initValue); 

    return (
        <input ref={input} type={attrs.type} placeholder={attrs.placeholder} class="input input-bordered w-full" />
    );

}
