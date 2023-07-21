import React from 'react'
import { Container } from '@mui/material'
import './notes.css'
export default function Notes() {
  return (
    <Container classNameName='' maxWidth='lg'>
     <body className=" bg-gray-900 text-white flex items-center justify-center h-screen">
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-md fade-in">
        <p className="costom text-lg text-center">
            Instead of searching for digital notes, try making handwritten DSA notes.<br/>
            They'll be more beneficial and effective in helping you learn.
        </p>
    </div>
</body>
    </Container>
  )
}
