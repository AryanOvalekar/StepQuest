import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Login from './Components/LoginRegister/Login';
import Homepage from './Components/Homepage/Homepage';
import Register from './Components/LoginRegister/Register';
import NavBar from './Components/Navbar/NavBar';
import LoginFailed from './Components/LoginRegister/LoginFailed';
import RegistrationFailed from './Components/LoginRegister/RegistrationFailed';
import QuestDashboard from './Components/QuestDashboard/QuestDashboard';

function App() {


  return (
    <Router>
      <NavBar />
    <Routes>

      <Route path="/" element={ <Homepage/> }/>

      <Route path="/login" element={ <Login/> }/>
      <Route path="/login-failed" element={ <LoginFailed/> }/>

      <Route path="/register" element={ <Register/> }/>
      <Route path="/registration-failed" element={ <RegistrationFailed/> }/>

      <Route path="/quests" element={ <QuestDashboard/> }/>

    </Routes>
    </Router>
  );
}

export default App;
