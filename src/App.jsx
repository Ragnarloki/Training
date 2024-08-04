import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Over_View from './components/Over_View';
import Benifit from './components/Benifit';
import Joined from './components/intro/Joined'
import Full_Stack from './components/course/Full_Stack';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/Joined/' element={<Joined/>}/>
         <Route path='/full_Stack/' element={<Over_View/>}/>
         <Route path='/Stack/' element={<Full_Stack/>}/>
         
      </Routes>
    </BrowserRouter>
   
 
 )
}

export default App