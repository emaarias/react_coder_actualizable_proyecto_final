import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

function Cart() {
  const { cartList, vaciarCarrito } = useContext(CartContext);

  return (
    (cartList.length === 0) ?
      <>
        <h3>😕 El carrito está vacío</h3>
        <Link to='/'>
          <button className="text-center my-4 btn btn-success" onClick={() => console.log('Yendo al home')}>SEGUIR COMPRANDO</button>
        </Link>

      </>
      :
      <div className="container" style={{ marginTop: '70px' }}>

        {cartList.map(prod =>


          <div key={prod.id} className="row cardMia">
            <div className="col-xl-2 col-sm-2" >
              <img src={prod.imageUrl} className="" alt="..." style={{ maxWidth: '70px' }} />
            </div>
            <div className="col-xl-5 col-sm-5" >{prod.title}</div>
            <div className="col-xl-1 col-sm-1" >{prod.cantidad}</div>
            <div className="col-xl-2 col-sm-2" >${prod.price}</div>
            <div className="col-xl-2 col-sm-2 text-success" >${(prod.price) * (prod.cantidad)}</div>
          </div>

        )}
        <div className="d-flex justify-content-end">
          <Link to='/'>
            <button className="btn btn-outline-success mt-1 mx-2" onClick={() => console.log('Yendo al home')}>CONTINUAR COMPRANDO</button>
          </Link>
          <button type="button" className="btn btn-outline-danger mt-1 mx-2" onClick={vaciarCarrito} >VACIAR CARRITO</button>

        </div>


      </div>
  )
}
export default Cart