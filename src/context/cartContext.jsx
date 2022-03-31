import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);


function CartContextProvider({children}) {
	const [cartList ,setCartList] = useState([]);
  return (
	<div>
		<CartContext.Provider value={{
			cartList
		}}>
		{children}
		</CartContext.Provider>
	</div>
  )
}

export default CartContextProvider