import { Route } from "wouter";
import LoginPage from "./pages/login/LoginPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";

function App() {
  return (
    <>
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </>
  );
}
export default App;
