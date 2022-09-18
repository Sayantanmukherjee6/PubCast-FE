import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import configData from "./config.json";
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
 
  return (
    <>
      <Login />
      <Logout />
      <Profile />
    </>
  );
}

export default App;
