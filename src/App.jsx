import { Match, Switch, useContext } from "solid-js";
import MainLayout from "./MainLayout";
import LoginPage from "./pages/LoginPage";
import { AuthenticationContext } from "./providers/AuthenticationProvider";
import { LoginProvider } from "./providers/LoginProvider";

function App() {

  const [store, {setAuthenticated}] = useContext(AuthenticationContext);

  return (
    <Switch>
      <Match when={store.isAuthenticated}>
        <MainLayout />
      </Match>
      <Match when={!store.isAuthenticated}>
        <LoginProvider>
          <LoginPage />
        </LoginProvider>
      </Match>
    </Switch>
  );
}

export default App;
