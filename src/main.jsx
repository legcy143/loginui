import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import App from './App'
import ForgetPass from './auth/ForgetPass'
import Login from './auth/Login'
import Signup from './auth/Signup'
import "./styles/index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup />}/>
        <Route exact path='/forgetpassword' element={<ForgetPass/>}/>
        
        <Route path='*' element={<h1 style={{textAlign: "center"}}>404 || page not found</h1>}/>
    </Routes>
    </BrowserRouter>
)