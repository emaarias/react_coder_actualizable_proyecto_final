import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/itemDetail';
import { getFetch } from "../../helpers/getFetch";
import { useParams } from 'react-router-dom';
import { getDoc, getFirestore , doc } from "firebase/firestore";

function ItemDetailContainer() {

	const [producto, setProducto] = useState({});
	const [loading, setLoading] = useState(true);
	const {idDetail} = useParams();



	const db = getFirestore();
    const queryDoc = doc(db,'products',idDetail);


	useEffect(() => {

		getDoc(queryDoc).then((resp) => {
			setProducto({ id:resp.id , ...resp.data()});
		}).catch((err) => {
			console.log(err);
		}).finally(() => {
			setLoading(false);
		})
			;
	}, []);


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