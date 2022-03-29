import { useState } from "react";
import { toast } from 'react-hot-toast';
import { Link } from "react-router-dom";

function ItemCount({stock, initial, onAdd }) {

	const [count, setCount] =  useState(initial);

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
		setInputType('input');
	}


	const [inputType, setInputType] =  useState('button');

	return (
	<div>
		<h3 style={{color: '#000'}}>Cantidad:</h3>
		<button onClick={handleDec}>-</button>
		<span style={{color: '#000'}}> {count} </span>
		<button onClick={handleInc}>+</button>
		<div>
			{
				inputType === 'button' ?
				(stock < 1) ? <h6 className="ss" >Sin Stock</h6> : <button className="text-center my-4 btn btn-warning" onClick={()=>add()}>+ AL CARRITO</button>
				:
				<Link to='/cart'>
					<button className="text-center my-4 btn btn-success" onClick={()=>console.log('Yendo al carrito')}>IR AL CARRITO</button>
				</Link>
			}
		</div>



	</div>
  )
}

export default ItemCount