import "./scss/style.scss";
import Landing from "./components/Landing"
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Templates from "./components/Templates";
import ResumeProvider from "./contexts/ResumeProvider";
import UserProvider from "./contexts/UserProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <UserProvider>
      <ResumeProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/:username/:id" exact element={<Resume />} />
            <Route path="/templates" exact element={<Templates />} />
            <Route path="/:username" exact element={<Account />} />
          </Routes>
        </Router>
      </ResumeProvider>
    </UserProvider>
  );
}

export default App;
