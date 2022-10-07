import NavBar from './components/NavBar';
import Home from './components/Home';
import Store from './components/Store';
import Contact from './components/Contact';
import Help from './components/Help';
import ItemListContainer from './components/ItemListContainer';
import FetchData from './utils/FetchData';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  /* const [state, setState] = useState([])

  useEffect(()=>{
    FetchData().then(()=>{
      setState(peticionAPI)
    })
    
  },[]) */

  return (
    <Router>
      <NavBar />
          
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/store' element={<Store />} />
        <Route exact path='/contacto' element={<Contact />} />
        <Route exact path='/ayuda' element={<Help />} />
        
      </Routes>
    </Router>
  );
}

export default App;
