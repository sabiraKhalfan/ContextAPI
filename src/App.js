import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import WelcomePage from './Components/Welcomepage';
import HomePage from './HomePage';

const App = () => {
  return (
    <BrowserRouter>
   
    <div className='App'>
      <Routes>
      <Route exact path='/' element={<WelcomePage/>}></Route>
  <Route exact path='/home' element={<HomePage/>}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
