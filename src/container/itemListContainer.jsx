import React, { useState, useEffect } from 'react';
import ItemCount from '../container/itemCount';
import './card.css';
import {getFetch} from '../helpers/getFetch';


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
        prod.map((producto) =>

          /*   <div
               key={producto.id}
              className='col-md-2'
            >
              <div className="card w-100 mt-5" >
                <div className="card-header">
                  {`${producto.title} - ${producto.category}`}
                </div>
                <div className="card-body">
                  <img src={producto.imageUrl} alt='' className='w-50' />
                  {producto.price}
                </div>
                <div className="card-footer">

                <ItemCount initial={1} stock={10}/>

                </div>
              </div>
            </div> */

          <div key={producto.id} className="container-fluid bg-trasparent my-4 p-3" style={{position: 'relative'}}>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
              <div className="col">
                <div className="card h-100 shadow-sm"> <img src={producto.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{producto.category}</span> <span className="float-end price-hp">$ {producto.price}</span> </div>
                    <h5 className="card-title" style={{color: '#000'}}>{producto.brand} - {producto.title}</h5>
                    <div className="text-center my-4"> <ItemCount initial={1} stock={producto.stock}/> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {/* <button onClick={() => { setBool(!bool) }}>Ver Todos los productos</button> */}
    </>

  )
}

export default ItemListContainer