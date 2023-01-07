import React from 'react'

const Producto = () => {
  return (
    <div>
        <div className='card bg-dark bg-opacity-50 mx-5' >
            <img src="./src/assets/mochila.jpg" class="card-img-top" alt="mochila" />
            <div class="card-body"> 
                <p class="card-text">Mochila moderna
                    </p>
                <h5 class="card-title">•Con dos cierres grandes
                    <br/>
                    •Color negro en Stock</h5>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>
  )
}

export default Producto