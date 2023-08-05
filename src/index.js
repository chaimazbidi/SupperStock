import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Signup from './pages/Signup'
import Produits from './pages/Produits';
import Login from './pages/Login';
import Panier from './pages/Panier';
import Carte from './pages/Carte';


ReactDOM.render(
  
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<App/>}/>
   <Route path="/Panier" element={<Panier/>}/>
   <Route path="/Produits" element={<Produits/>}/>
   <Route path="/Login" element={<Login/>}/>
   <Route path="/Signup" element={<Signup/>}/>
   <Route path="/Carte" element={<Carte/>}/>
   </Routes>
   
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
