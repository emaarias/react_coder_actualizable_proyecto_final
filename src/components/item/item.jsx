
import React from 'react';
import ItemCount from '../../container/itemCount';

function Item({producto}) {
	return (

		<div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
			<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
				<div className="col">
					<div className="card h-100 shadow-sm"> <img src={producto.imageUrl} className="card-img-top" alt="..." />
						<div className="card-body">
							<div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{producto.category}</span> <span className="float-end price-hp">$ {producto.price}</span> </div>
							<h5 className="card-title" style={{ color: '#000' }}>{producto.brand} - {producto.title}</h5>
							<div className="text-center my-4"> <ItemCount initial={1} stock={producto.stock} /> </div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Item

