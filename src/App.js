// Imports ---------------------------------------------------
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import Dashboard from './Pages/Dashboard';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </>
  )
}

export default App;
