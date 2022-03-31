import { useContext, useState } from "react";
import { toast } from 'react-hot-toast';
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function ItemCount({ stock, initial, onAdd, producto }) {


	const { addToCart, cartList } = useContext(CartContext);

	const [count, setCount] = useState(initial);

	function handleInc() {
		if (count < stock) {
			setCount(count + 1);
			//console.log(count);
		}
	};

	function handleDec() {
		if (count > initial) {
			setCount(count - 1);
			//console.log(count);
		}
	};

	const add = function () {
		toast.success(`Agregó ${count} prenda/s a su carrito`);
		setInputType('input');
		addToCart({ ...producto, cantidad: count })
	}
	console.log('CartList', cartList);

	const [inputType, setInputType] = useState('button');

	return (
		<div>
			<h3 style={{ color: '#000' }}>Cantidad:</h3>
			<button onClick={handleDec}>-</button>
			<span style={{ color: '#000' }}> {count} </span>
			<button onClick={handleInc}>+</button>
			<div>
				{
					inputType === 'button' ?
						(stock < 1) ? <h6 className="ss" >Sin Stock</h6> : <button className="text-center my-4 btn btn-warning" onClick={() => add()}>+ AL CARRITO</button>
						:
						<div className="container">
							<Link to='/cart'>
								<button className="text-center mt-4 btn btn-success col-12" onClick={() => console.log('Yendo al carrito')}>IR AL CARRITO</button>
							</Link>

							<Link to='/'>
								<button className="text-center mt-1 btn btn-secondary col-12" onClick={() => console.log('Yendo al home')}>CONTINUAR COMPRANDO</button>
							</Link>

						</div>
				}
			</div>


		</div>
	)
}

export default ItemCount