import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage/homepage';
import Dashboard from './component/Dashboard/Dashboard';
import Login from './component/Login/Login';
import SubPage from './component/SubPage/SubPage';
import Register from './component/Register/Register';
import Members from './component/Members/Members';
import Meet from './component/Meeting/meeting';
import NoMatch from './component/NoMatch/NoMatch';
import Reservation from './component/Reservation/Reservation';
import Comment from './component/Comment/Comment';
import Pay from './component/Pay/Pay';
import Deneme from './component/deneme/deneme';
import Settings from './component/Settings/Settings';
import Forgot from './component/Forgot/Forgot';
import Talk from './component/Talk/Talk';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="members" element={<Members />}></Route>
          <Route path='about' element={<SubPage type="about"/>}></Route>
          <Route path='howto' element={<SubPage type="howto"/>}></Route>
          <Route path='misyon' element={<SubPage type="misyon"/>}></Route>
          <Route path='kvkk' element={<SubPage type="kvkk"/>}></Route>
          <Route path='contact' element={<SubPage type="contact"/>}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Register />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="comment" element={<Comment />}></Route>
          <Route path="pay" element={<Pay />}></Route>
          <Route path="forgot" element={<Forgot />}></Route>
          <Route path="setting" element={<Settings />}></Route>
          <Route path="reservation" element={<Reservation />}></Route>
          <Route path='meet' element={<Meet />}></Route>
          <Route path='deneme' element={<Deneme />}></Route>
          <Route path='talk' element={<Talk />}></Route>
          <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
