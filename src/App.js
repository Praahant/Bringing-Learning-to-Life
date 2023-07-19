import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import Roadmap from './roadmap'
import Header from './header'
export default function App() {
  return (
  <div>
    <Header></Header>
    <Routes>
    <Route path="/" element={<h1>hey</h1>}/>
    <Route path="/roadmap" element={<Roadmap/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </div>
  )
}
