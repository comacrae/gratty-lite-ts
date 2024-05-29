import { Route, Switch } from "wouter";
import LoginPage from "./pages/login/LoginPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import ProfilePage from "./pages/profile/ProfilePage.tsx";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route>404, not found!</Route>
    </Switch>
  );
}
export default App;
