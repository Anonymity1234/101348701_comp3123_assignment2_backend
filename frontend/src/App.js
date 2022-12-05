import './App.css';
import Create from './components/Create'
import Register from './components/Register'
import View from './components/View'
import Login from './components/Login'
import Update from './components/Update'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main" style={{ backgroundImage: "url(/background-image.jpg)" }} >
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/add" element={<Create/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
    </Router>
    </div>
  </div>
   
  );
}

export default App;
