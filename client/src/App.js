import "./scss/style.scss";
import Landing from "./components/Landing"
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/:user/:id" exact element={<Resume />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
