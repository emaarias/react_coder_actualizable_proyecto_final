import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

function Cart() {
  const { cartList, vaciarCarrito, deleteOne, sumaTotal } = useContext(CartContext);

  const generarOrden = (e) => {
    e.preventDefault();
    let orden = {};
    orden.buyer = {name:'Emanuel',email:'emanuel.arias@groovinads.com',phone:'3562671975'};
    orden.total = sumaTotal();

    orden.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price * cartItem.cantidad;

      return { id, title, price }
    })

    const db = getFirestore();
    const queryCollection = collection(db,'orders');
    addDoc(queryCollection, orden)
    /*  .then(resp => {console.log('RESP: ',resp)}) */
    .then(({ id }) => alert(id))


    console.log('ORDEN: ', orden)
  };




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
            <div className="col-xl-4 col-sm-4" >{prod.title}</div>
            <div className="col-xl-1 col-sm-1" >{prod.cantidad}</div>
            <div className="col-xl-2 col-sm-2" >${prod.price}</div>
            <div className="col-xl-2 col-sm-2 text-success" >${prod.price * prod.cantidad}</div>
            <div className="col-xl-1 col-sm-1" ><button className='botonDelete' onClick={() => deleteOne(prod.id)}>✕</button></div>
          </div>

        )}

        <div className="row cardMiaTot">


          <div className="col-xl-9 col-sm-9">Compra Total a pagar:</div>
          <div className="col-xl-2 col-sm-2 cTot">${sumaTotal()}</div>
          <div className="col-xl-1 col-sm-1" ></div>
        </div>
        <div className="row cardMiaGenOr">
          <button type="button" className="btn btn-outline-info mt-1 col-12" style={{ padding: '1rem' }} onClick={generarOrden}>GENERAR ORDEN</button>
        </div>



        <br />

        <div className="d-flex justify-content-end">
          <Link to='/'>
            <button className="btn btn-outline-success mt-1 mx-2" onClick={() => console.log('Yendo al home')}>CONTINUAR COMPRANDO</button>
          </Link>
          <button type="button" className="btn btn-outline-danger mt-1 mx-2" onClick={vaciarCarrito} >VACIAR CARRITO</button>

        </div>
        <br />




      </div>
  )
}
export default Cart