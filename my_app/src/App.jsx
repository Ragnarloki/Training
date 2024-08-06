import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Over_View from './components/Over_View';
import Benifit from './components/Benifit';
import Joined from './components/intro/Joined'
import Full_Stack from './components/course/Full_Stack';
import Assignment from './components/Assignment/Assignment';
import Question from './components/Question/Question';
import "./index.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Joined/>}/>
         <Route path='/Question/' element={<Question/>}/>
         <Route path='/full_Stack/' element={<Over_View/>}/>
         <Route path='/Stack/' element={<Full_Stack/>}/>
         <Route path='/Assignment/' element={<Assignment/>}/>
          
      </Routes>
    </BrowserRouter>
   
 
 )
}

export default App