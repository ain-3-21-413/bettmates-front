import { Route, Routes } from "@solidjs/router";
import { createSignal, For, onMount } from "solid-js";
import EditorPage from "../pages/EditorPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";
import ProfilePage from "../pages/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";

export default function MainRouting(props) {

    const [routes, setRoutes] = createSignal([
        {
            path: "/", component: PostsPage
        },
        {
            path: "/posts", component: PostsPage
        },
        {
            path: "/posts/:slug", component: PostPage
        },
        {
            path: "/users", component: UsersPage
        },
        {
            path: "/users/:slug", component: UserPage
        },
        {
            path: "/profile", component: ProfilePage
        },
        {
            path: "/editor", component: EditorPage
        },
        {
            path: "/editor/:slug", component: EditorPage
        },
        {
            path: "/login", component: LoginPage
        }
    ]);
    
    return (
        <Routes>
            <For each={routes()}>{(route) =>
                <Route path={route.path} component={route.component} />
            }</For>
        </Routes>
    );

}
