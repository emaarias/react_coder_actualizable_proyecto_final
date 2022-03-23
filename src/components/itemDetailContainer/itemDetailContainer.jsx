import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/itemDetail';
import { getFetch } from "../../helpers/getFetch";
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

	const [producto, setProducto] = useState({});
	const [loading, setLoading] = useState(true);

	
	useEffect(() => {
		getFetch.then((resp) => {
			setProducto(resp.find(prodD => prodD.id === '1'));
		}).catch((err) => {
			console.log(err);
		}).finally(() => {
			setLoading(false);
		})
			;
	}, []);

	console.log(producto);

	return (
		<>
			{
				loading ? <h2>Cargando ...</h2>
					:
					<div>
						<br />
						<ItemDetail producto={producto} />
					</div>

			}
		</>

	)
}

export default ItemDetailContainer