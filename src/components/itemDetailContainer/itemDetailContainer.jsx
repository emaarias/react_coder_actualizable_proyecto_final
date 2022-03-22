import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/itemDetail';
import { getFetch } from "../../helpers/getFetch";

function ItemDetailContainer() {

	const [producto, setProducto] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getFetch.then((resp) => {
			setProducto(resp.find(prodD => prodD.id == 1));
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
				loading ? <h2></h2>
					:
					<div>
						<ItemDetail producto={producto} />
					</div>

			}
		</>

	)
}

export default ItemDetailContainer