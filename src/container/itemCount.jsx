import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';

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
		<h3>Contador:</h3>
		<button onClick={handleDec}>-</button>
		<span> {count} </span>
		<button onClick={handleInc}>+</button>
		<div>
			{
				(stock < 1) ? <h6 className="ss" >Sin Stock</h6> : <button onClick={()=>add()}>Sumar al carrito</button>
			}
		</div>

        <Toaster
			position="top-right"
			reverseOrder={true}
			toastOptions={{
				style:{
					top:'60px',
					fontSize: '14px',
					position:"relative",
				}
			  }}

		/>

	</div>
  )
}

export default ItemCount