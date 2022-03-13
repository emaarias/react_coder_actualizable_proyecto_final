import { useState } from "react";


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
		alert("Se agregarán " + count + " unidades a su carrito");
		console.log(count);
	}

	return (
	<div>
		<button onClick={handleDec}>-</button>
		<span>{count}</span>
		<button onClick={handleInc}>+</button>
		<div>
			<button onClick={add}>Sumar al carrito</button>
		</div>

	</div>
  )
}

export default ItemCount