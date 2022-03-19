import React, { useState, useEffect } from 'react';
import './card.css';
import { getFetch } from '../helpers/getFetch';
import { Toaster } from 'react-hot-toast';
import Item from '../components/item/item';

function ItemListContainer({ greeting }) {

  const [bool, setBool] = useState(false);
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getFetch.then((resp) => {
      setProd(resp);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      console.log(setLoading(false));
    })
      ;
  }, []);

  console.log(prod);
  return (
    <>
      <div>{greeting}</div>
      {
        loading ? <h2>Cargando...</h2>
          :
          prod.map((producto) => <Item producto={producto} key={producto.id} />
      )
    }

    <Toaster position='top/right'
    reverseOrder='true'
    toastOptions={
      {
        style:{
          top:'60px',
          fontSize:'14px',
          position: 'relative'

        }
      }
    }
    />

    </>

  )
}


export default ItemListContainer