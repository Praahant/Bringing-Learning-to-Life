import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import Notes from './notes'
import Roadmap from './roadmap'
import Draw from './Pages/Draw/draw'
import Header from './header'
import Flow from './Pages/Roadmap/roadmap'
import Array from './Pages/Links-Leetcode/Array'
export default function App() {
  return (
  <div>
    <Header></Header>
    <Routes>
    <Route path="/notes" element={<Notes/>}/>
    <Route path="/roadmap" element={<Flow/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/draw" element={<Draw/>}/>
    <Route path="/flow" element={<Flow/>}/>
    <Route path='/roadmap/Array' element={<Array/>}/>;
  </Routes>
  </div>
  )
}
