import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './Pages/Homepage/Homepage';
import Projectdetailpage from './Pages/Projectdetailpage/Projectdetailpage';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/detailpage/:id' element={<Projectdetailpage/>} />
      </Routes>
    </div>
  )
}

export default App
