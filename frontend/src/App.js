import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Login from './Components/LoginRegister/Login';
import Homepage from './Components/Homepage/Homepage';
import Register from './Components/LoginRegister/Register';
import NavBar from './Components/Navbar/NavBar';
import LoginFailed from './Components/LoginRegister/LoginFailed';
import RegistrationFailed from './Components/LoginRegister/RegistrationFailed';
import Profile from './Components/Profile/Profile';
import QuestDashboard from './Components/QuestDashboard/QuestDashboard';
import QuestTutorial from './Components/QuestCompletion/QuestTutorial';
import About from './Components/Homepage/About';
import TrophyRoom from './Components/TrophyRoom/TrophyRoom';

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

      <Route path="/profile" element={ <Profile /> } />
      <Route path="/quests" element={ <QuestDashboard/> }/>

      <Route path="/tutorial" element={ <QuestTutorial/> }/>

      <Route path="/about" element={ <About/> }/>

      <Route path="/trophies" element={ <TrophyRoom/> }/>

    </Routes>
    </Router>
  );
}

export default App;
