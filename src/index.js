import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { Staffprovider } from './context/staff.context';

ReactDOM.render(
  
  <BrowserRouter>
  <Staffprovider>
  <UserProvider>
  <App />
  </UserProvider>
  </Staffprovider>
  </BrowserRouter>,
  document.getElementById('root')
  );
 

