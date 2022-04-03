import React, { useState, useEffect } from 'react';
import './card.css';
import { getFetch } from '../helpers/getFetch';
import Item from '../components/item/item';
import { useParams } from 'react-router-dom';


function ItemListContainer({ greeting }) {

  const [bool, setBool] = useState(false);
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);

  const {idGender} = useParams();



  useEffect(() => {

    if (idGender) {
      getFetch.then((resp) => {
        setProd(resp.filter(prodG => prodG.gender === idGender));
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        console.log(setLoading(false));
      })
        ;

    }else{
      getFetch.then((resp) => {
        setProd(resp);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        console.log(setLoading(false));
      })
        ;
    }

  }, [idGender]);

  console.log(idGender);
  return (
    <>
      <div>{greeting}</div>
      {
        loading ? <h2>Cargando...</h2>
          :
          <div className="container-fluid bg-trasparent my-4 p-3" style={{ display:'flex', flexDirection:'row' , flexWrap:'wrap', justifyContent:'center', alignContent:'center' }}>
          {prod.map((producto) => <Item producto={producto} key={producto.id} />)}
          </div>
    }

    </>

  )
}


export default ItemListContainer