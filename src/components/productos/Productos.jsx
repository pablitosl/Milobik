import React from 'react'
import Producto from './Producto'

const Productos = () => {
  return (
    <div className='bg-success vh-100 text-center fs-2'>
      <h2 className='fs-1 py-5'>Nuestros Productos</h2>
      <div className='d-flex '>
        <Producto />
        <Producto />
        <Producto />
        <Producto />
      </div>
    </div>
  )
}

export default Productos