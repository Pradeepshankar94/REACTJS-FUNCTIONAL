import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import List from './components/list';
import Update from './components/update';
import Add from './components/add';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<List/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/update/:id" element={<Update/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
