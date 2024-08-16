import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Adminpage from './Restuarant/Adminpage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Adminpage />}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import { useLocalStorage } from 'usehooks-ts';
// import Login from './Login';
// import { Button } from '@mui/material';
// import './App.css'; 
// import LoginjwtDecode from './LoginjwtDecode';

// function App() {
//     const [jwt, setJwt] = useLocalStorage('jwt', '');
//     const navigate = useNavigate();

//     function handleLogout() {
//         setJwt('');
//         navigate('/login', { state: { logoutMessage: "You have successfully logged out!" } });
//     }

//     return (
//         <div className="app-container">
//             {jwt && (
//                 <div className="logout-container">
//                     <Button onClick={handleLogout} variant="contained" color="secondary">
//                         Logout
//                     </Button>
//                 </div>
//             )}
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path='/LoginDecode' element={<LoginjwtDecode/>}/>
//             </Routes>
//         </div>
//     );
// }

// function AppWrapper() {
//     return (
//         <Router>
//             <App />
//         </Router>
//     );
// }

// export default AppWrapper;
