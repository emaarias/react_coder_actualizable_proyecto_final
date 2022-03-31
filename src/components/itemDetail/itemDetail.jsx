import React, { useContext } from 'react';
import ItemCount from '../../container/itemCount';
import { Toaster } from 'react-hot-toast';


function ItemDetail({producto}) {



  return (
	<div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
		 <h1>Detalle de Producto</h1>
		 <br />
	<div className="row row-cols-12 row-cols-xs-12 row-cols-sm-12 row-cols-lg-12 g-3">
		<div className="col">
			<div className="card h-100 shadow-sm"> <img src={producto.imageUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{producto.category}</span> <span className="float-end price-hp">$ {producto.price}</span> </div>
					<h5 className="card-title" style={{ color: '#000' }}>{producto.brand} - {producto.title}</h5>
					<div className="text-center my-4"> <ItemCount initial={1} stock={producto.stock} producto={producto}/> </div>

				</div>
			</div>
		</div>
	</div>

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

</div>
  )
}

export default ItemDetail