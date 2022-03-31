import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);


function CartContextProvider({children}) {
	const [cartList ,setCartList] = useState([]);
	const addToCart = (item)=>{
		setCartList([...cartList, item])
	}

const vaciarCarrito = () =>{
	setCartList([]);
}
  return (
	<div>
		<CartContext.Provider value={{
			cartList,
			addToCart,
			vaciarCarrito
		}}>
		{children}
		</CartContext.Provider>
	</div>
  )
}

export default CartContextProvider