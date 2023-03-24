import Navbar from "./components/Navbar";
import MainRouting from "./routing/MainRouiting";

export default function MainLayout(props) {

    return (
        <div class="flex flex-col p-5">
            <Navbar />
            <div class="">
                <MainRouting />
            </div>
        </div>
    );

}
