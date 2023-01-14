import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Login from './Components/LoginRegister/Login';
import Homepage from './Components/Homepage/Homepage';
import Register from './Components/LoginRegister/Register';

function App() {
  return (
    <Router>
    <Routes>

      <Route path="/" element={ <Homepage/> }/>

      <Route path="/login" element={ <Login/> }/>

      <Route path="/register" element={ <Register/> }/>

    </Routes>
    </Router>
  );
}

export default App;
