import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate, useParams} from 'react-router-dom';


function Dashboard(){
  return <h2>Dashboard</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function UserProfile() {
  const {userId} = useParams();
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}

function App() {
  const [loggedIn] = useState(true);

  return (
<Router>
  <Routes>
    <Route path="/dashboard"
      element={loggedIn ? <Dashboard/> : <Navigate replace to="/login"/>}
    />
    <Route path="/login" element={<Login/>} />
    <Route path="/"
    element={<Navigate exact from="/" to="/dashboard"/>}/>
    <Route path="/user/:userId" element={<UserProfile/>}/>
  </Routes>
</Router>
  );
}

export default App;
