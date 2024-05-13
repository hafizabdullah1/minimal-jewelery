import React, { Component } from 'react'
import { Routes,Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Men from './screens/Men';
import Women from './screens/Women';
import Kid from './screens/Kid';
import Bima from './screens/Bima';

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Men' element={<Men/>}></Route>
        <Route path='/Women' element={<Women/>}></Route>
        <Route path='/Kid' element={<Kid/>}></Route>
        <Route path='/Bima' element={<Bima/>}></Route>
        </Routes>
      </>
    )
  }
}
