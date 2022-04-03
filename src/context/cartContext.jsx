import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);


function CartContextProvider({ children }) {

	const [cartList, setCartList] = useState([]);


	const addToCart = (item) => {
		if(isInCart(item.id)){

			const prod = cartList.find((p) => p.id === item.id)
			const {cantidad} = prod

			prod.cantidad = item.cantidad + cantidad
			const NewCart = [ ...cartList ]
			setCartList(NewCart)
		}
		else{
			setCartList([...cartList, item])
		}
	}

	const vaciarCarrito = () => {
		setCartList([]);
	}

	const isInCart = (id) => {
		return cartList.some(prod => prod.id === id)
	}


	const deleteOne = (id) => {
		setCartList(cartList.filter(d => d.id !== id))
	}


	const sumaTotal = () => {
		return cartList.reduce((acum , item) => acum = acum + (item.price * item.cantidad),0)
	}

	const cantidad = () => {
		return cartList.reduce((acum , item) => acum += item.cantidad , 0)

	}


	return (
		<div>
			<CartContext.Provider value={{
				cartList,
				addToCart,
				vaciarCarrito,
				deleteOne,
				sumaTotal,
				cantidad
			}}>
				{children}
			</CartContext.Provider>
		</div>
	)
}

export default CartContextProvider