import { useState } from "react";
import { toast } from 'react-hot-toast';

function ItemCount({stock, initial, onAdd }) {

	const [count, setCount] =  useState(initial)

	function handleInc() {
		if (count < stock){
			setCount(count + 1);
			//console.log(count);
		}
	};

	function handleDec() {
		if (count > initial){
			setCount(count - 1);
			//console.log(count);
		}
	};

	const add = function () {
		toast.success(`Agregó ${count} prenda/s a su carrito`);
	}

	return (
	<div>
		<h3 style={{color: '#000'}}>Cantidad:</h3>
		<button onClick={handleDec}>-</button>
		<span style={{color: '#000'}}> {count} </span>
		<button onClick={handleInc}>+</button>
		<div>
			{
				(stock < 1) ? <h6 className="ss" >Sin Stock</h6> : <button className="text-center my-4 btn btn-warning" onClick={()=>add()}>+ AL CARRITO</button>

			}
		</div>



	</div>
  )
}

export default ItemCount