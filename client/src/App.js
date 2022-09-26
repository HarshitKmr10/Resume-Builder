import "./scss/style.scss";
import Landing from "./components/Landing"
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Accounts from "./components/Accounts";
import Templates from "./components/Templates";
import ResumeProvider from "./contexts/ResumeProvider";

function App() {
  return (
    <ResumeProvider>
      <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup/>} />
        <Route path="/:user/:id" exact element={<Resume />} />
        <Route path="/accounts" exact element={<Accounts/>} />

        <Route path="/templates" exact element={<Templates />} />
      </Routes>
    </Router>
    </ResumeProvider>
  );
}

export default App;
