import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import CccCc from './CccCc';
import Saving from './Saving';
import SavingList from './SavingList';


function App() {
  return (
    <div className="App">
      <CccCc/>
      <Saving/>
      <SavingList/>
    </div>
  );
}

export default App;
