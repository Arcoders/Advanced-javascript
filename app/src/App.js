import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' exact element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
