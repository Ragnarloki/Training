import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Over_View from './components/Over_View';
import Benifit from './components/Benifit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/full_Stack/' element={<Over_View/>}/>
      </Routes>
    </BrowserRouter>
   
 
 )
}

export default App