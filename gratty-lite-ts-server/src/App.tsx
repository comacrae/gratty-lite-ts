import { Route } from "wouter";
import loginPage from "./pages/login/loginPage.tsx";
import homePage from "./pages/home/homePage.tsx";

function App() {
  return (
    <>
      <Route path="/login" component={loginPage} />
      <Route path="/home" component={homePage} />
    </>
  );
}
export default App;
