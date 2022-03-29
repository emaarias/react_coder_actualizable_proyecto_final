
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ItemCount from '../../container/itemCount';

function Item({ producto }) {
	return (

		<div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
			<div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
				<div className="col">
					<div className="card h-100 shadow-sm">
						<Link to={`detalle/${producto.id}`}>
							<span className="card-img-top float-start badge bg-primary vermas sombra" ><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-search lupa" viewBox="0 0 16 16">
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg></span>
						</Link>
						<img src={producto.imageUrl} className="card-img-top" alt="Imagen de producto" />

						<div className="card-body">
							<div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{producto.category}</span> <span className="float-end price-hp">$ {producto.price}</span> </div>
							<h5 className="card-title" style={{ color: '#000' }}>{producto.brand} - {producto.title}</h5>
							{/* <div className="text-center my-4"> <ItemCount initial={1} stock={producto.stock} /> </div> */}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Item

