import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function Cart() {

  const [dataForm, setDataForm] = useState({ name: '', phone: '', email: '' });

  const { cartList, vaciarCarrito, deleteOne, sumaTotal } = useContext(CartContext);

  const generarOrden = (e) => {
    e.preventDefault();
    let orden = {};
    orden.buyer = dataForm;
    orden.total = sumaTotal();


    orden.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price * cartItem.cantidad;

      return { id, title, price }
    })

    const db = getFirestore();
    const queryCollection = collection(db, 'orders');
    addDoc(queryCollection, orden)
      .then(({ id }) => toast.success(`Gracias ${orden.buyer.name}, su ID de su Orden es: ${id}`, { duration: 5000 }))
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setTimeout(() => {
          vaciarCarrito();
        }, 5500);
      })
      ;


    document.getElementById('formulario').style.display = "none";
    document.getElementById('headerFormulario').style.display = "none";
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  const validationForm = (e)=>{

    e.preventDefault();
    const formulario = document.getElementById('formulario');
    const inputName = document.getElementById('inputName');
    const inputPhone = document.getElementById('inputPhone');
    const inputEmail = document.getElementById('inputEmail');
    const inputEmailCopy = document.getElementById('inputEmailCopy');
    if (inputName.value !== '' && inputPhone.value !== '' && inputEmail.value !== ''  && inputEmailCopy.value !== '' ) {
      inputName.disabled = true;
      inputPhone.disabled = true;
      inputEmail.disabled = true;
      inputEmailCopy.disabled = true;
      document.getElementById('validarOrdenBtn').style.display = "none";
      document.getElementById('generarOrdenBtn').style.display = "block";
    }else if (inputEmail.value !== inputEmailCopy.value ) {
      toast.error(`Cargue su email correctamente.`, { duration: 2000 })
      inputEmailCopy.classList.add("miInputError");
      inputEmail.classList.add("miInputError");
        setTimeout(() => {
          inputEmailCopy.classList.remove("miInputError");
          inputEmail.classList.remove("miInputError");
        }, 2000);
    }else{
      toast.error(`Complete todos los campos correctamente.`, { duration: 2000 })
      if (inputName.value == '') {
        inputName.classList.add("miInputError");
        setTimeout(() => {
          inputName.classList.remove("miInputError");
        }, 2000);
      }
      if (inputPhone.value == '') {
        inputPhone.classList.add("miInputError");
        setTimeout(() => {
          inputPhone.classList.remove("miInputError");
        }, 2000);
      }
      if (inputEmail.value == '') {
        inputEmail.classList.add("miInputError");
        setTimeout(() => {
          inputEmail.classList.remove("miInputError");
        }, 2000);
      }
      if (inputEmailCopy.value == '') {
        inputEmailCopy.classList.add("miInputError");
        setTimeout(() => {
          inputEmailCopy.classList.remove("miInputError");
        }, 2000);
      }
    }

  }





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
        <div className="d-flex justify-content-end">
          <Link to='/'>
            <button className="btn btn-outline-success mt-1 mx-2" onClick={() => console.log('Yendo al home')}>CONTINUAR COMPRANDO</button>
          </Link>
          <button type="button" className="btn btn-outline-danger mt-1 mx-2" onClick={vaciarCarrito} >VACIAR CARRITO</button>

        </div>
        <br />



        <div className="row cardMiaGenOr" id='headerFormulario'>

          <div className='border border-white mt-1 col-12' style={{ padding: '1rem' }} > ⭐︎&nbsp;&nbsp;FINALICE SU COMPRA&nbsp;&nbsp;⭐︎ </div>
          <div className='border border-white'>
            <form onSubmit={generarOrden} method='post' id='formulario'>
              <input type="text" name='name' placeholder='Intrduzca su Nombre aquí ...'
                value={dataForm.name} onChange={handleChange} className="form-control mt-4 miInput" required='' id='inputName'/> <br />
              <input type="number" name='phone' placeholder='Intrduzca su Telefono aquí ...'
                value={dataForm.phone} onChange={handleChange} className="form-control miInput" required='' id='inputPhone'/> <br />
              <input type="email" name='email' placeholder='Intrduzca su Email aquí ...'
                value={dataForm.email} onChange={handleChange} className="form-control miInput" required='' id='inputEmail'/> <br />
              <input type="email" name='emailCopy' placeholder='Repita su Email aquí ...'
                value={dataForm.emailCopy} className="form-control miInput" required='' id='inputEmailCopy'/> <br />
              <button type="submit" className="btn btn-outline-success mt-1 mb-3 col-12" id='validarOrdenBtn' style={{ padding: '1rem' }} onClick={validationForm}>CONFIRMAR DATOS</button>
              <button type="submit" className="btn btn-outline-info mt-1 mb-3 col-12" id='generarOrdenBtn' style={{ padding: '1rem', display:'none' }} onClick={generarOrden}>FINALIZAR COMPRA</button>

            </form>

          </div>

        </div>

        <br />

        <Toaster position='top/center'
          reverseOrder='true'
          toastOptions={
            {
              style: {
                top: '60px',
                fontSize: '14px',
                position: 'relative'

              }
            }
          }
        />


      </div>
  )
}
export default Cart