import { useNavigate } from "@solidjs/router";
import { For, onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { CurrentPageContext } from "../providers/CurrentPageProvider";

export default function Table(props) {

    const navigate = useNavigate();

    const [store, {setCurrentPage}] = useContext(CurrentPageContext);

    const initAttrs = {
        thead: [],
        tbody: []
    }

    onMount(() => {
        if (props.thead) {
            setAttrs("thead", props.thead);
        };
        if (props.tbody) {
            setAttrs("tbody", props.tbody);
        };
    });

    const [attrs, setAttrs] = createStore(initAttrs);

    return (

<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <For each={attrs.thead}>{(th) =>
            <th> {th} </th>
        }</For>
      </tr>
    </thead>
    <For each={attrs.tbody}>{(tr, i) =>       
        <tbody>
        <tr>
            <th>{i() + 1}</th>
            <td><a onClick={() => {navigate("/users/" + tr.slug); setCurrentPage("User")}} class="hover:text-primary cursor-pointer">{tr.username}</a> <span class="text-base-content/50">({tr.firstName} {tr.lastName})</span></td>
            <td><a class="hover:underline cursor-pointer">{tr.postsQty}</a></td>
        </tr>
        </tbody>
    }</For>
  </table>
</div>

    );
}
