import React, { useState, useEffect } from 'react';
import './card.css';
import { getFetch } from '../helpers/getFetch';
import Item from '../components/item/item';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc, docs, collection, getDocs, query, where } from 'firebase/firestore';



function ItemListContainer({ greeting }) {

  const [bool, setBool] = useState(false);
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);

  const [prodFB, setProdFB] = useState({});
  const { idGender } = useParams();


  /*FUnciona correctament con firebase .. falta el filtro por caegoria o (idGender) */
  /*   useEffect(() => {

      const db = getFirestore() ;
      const queryCollection = collection(db,'products');
      getDocs(queryCollection)
        .then(resp => setProdFB(resp.docs.map(producto =>( {id: Number(producto.id), ...producto.data() } ))))
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          console.log(setLoading(false));
        })
      }, [idGender]);

    */

  /*FUnciona correctament con firebase .. CON el filtro por caegoria o (idGender) */
  /*

      const db = getFirestore() ;
    const queryCollection = collection(db,'products');
    const queryFilter = query(queryCollection , where('gender','==',idGender));



    getDocs(queryFilter)
      .then(resp => setProdFB(resp.docs.map(producto =>( {id: Number(producto.id), ...producto.data() } ))))
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        console.log(setLoading(false));
      })
    }, [idGender]);

  */



  /*   useEffect(() => {

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
   */



  useEffect(() => {

    const db = getFirestore();
    const queryCollection = collection(db, 'products');


    if (idGender) {
      
      const queryFilter = query(queryCollection, where('gender', '==', idGender));
      getDocs(queryFilter)
        .then(resp => setProdFB(resp.docs.map(producto => ({ id: Number(producto.id), ...producto.data() }))))
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          console.log(setLoading(false));
        });

    } else {

      getDocs(queryCollection)
        .then(resp => setProdFB(resp.docs.map(producto => ({ id: Number(producto.id), ...producto.data() }))))
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          console.log(setLoading(false));
        });

    }


  }, [idGender]);


  console.log(prodFB);
  return (
    <>
      <div>{greeting}</div>
      {
        loading ? <h2>Cargando...</h2>
          :
          <div className="container-fluid bg-trasparent my-4 p-3" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center' }}>
            {prodFB.map((producto) => <Item producto={producto} key={producto.id} />)}
          </div>
      }

    </>

  )
}


export default ItemListContainer