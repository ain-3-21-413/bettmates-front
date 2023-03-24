import { useContext } from "solid-js";
import Table from "../components/Table";
import { UsersContext } from "../providers/UsersProvider";

export default function UsersPage(props) {

    const [store] = useContext(UsersContext);
    
    return (

        <div class="flex grow flex-col py-5 gap-5">
            <h1 class="text-3xl font-bold"> Users </h1>
            <Table thead={["User", "Posts"]} tbody={store.users} />
        </div>

    );

}
