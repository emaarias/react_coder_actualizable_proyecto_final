const products = [
	{ id: '0', category: 'Remeras', title: 'Remera Lisa', size: ['S', 'M', 'L', 'XL'], price: 3500, discount: 15, colour: 'Blanco', brand: 'Adidas', gender: 'men', stock: 20, age: 'adult', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' },
	{ id: '1', category: 'Remeras', title: 'Remera Estampa', size: ['XS', 'M'], price: 4999, discount: 0, colour: 'Negro', brand: 'Adidas', gender: 'women', stock: 10, age: 'adult', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' },
	{ id: '2', category: 'Pantalones', title: 'Pantalon Clásico Recto', size: ['32', '34', '36', '40'], price: 12000, discount: 20, colour: 'Beige', brand: 'Nike', gender: 'men', stock: 8, age: 'adult', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' },
	{ id: '3', category: 'Pantalones', title: 'Pantalón Liso Mujer', size: ['24', '26', '28', '30'], price: 9999, discount: 0, colour: 'Negro', brand: 'Nike', gender: 'women', stock: 12, age: 'adult', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' },
	{ id: '4', category: 'Buzos', title: 'Buzo Canguro Sport', size: ['S', 'M', 'L', 'XL'], price: 8500, discount: 15, colour: 'Negro', brand: 'Adidas', gender: 'men', stock: 10, age: 'adult', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' },
	{ id: '5', category: 'Buzos', title: 'Buzo Mujer Liso Fitness', size: ['XS', 'S', 'L', 'XL'], price: 6500, discount: 15, colour: 'Rosa', brand: 'Topper', gender: 'women', stock: 4, age: 'adult', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' },
	{ id: '6', category: 'Camperas', title: 'Campera Lisa', size: ['S', 'M'], price: 3500, discount: 15, colour: 'White', brand: 'Adidas', gender: 'men', stock: 200, age: 'adult', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' },
	{ id: '7', category: 'Musculosas', title: 'Musculosa Niño Estampa', size: ['8', '10', '12'], price: 2500, discount: 20, colour: 'White', brand: 'Nike', gender: 'men', stock: 16, age: 'kid', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' },
	{ id: '8', category: 'Camisas', title: 'Camisa Niño Lisa', size: ['10', '12', '16'], price: 5400, discount: 0, colour: 'White', brand: 'Legacy', gender: 'men', stock: 15, age: 'kid', imageUrl: 'https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw624546dd/products/NI_DC7207-010/NI_DC7207-010-1.JPG' }
  ];



 export const getFetch = new Promise((resolve, reject) => {
	let condition = true;
	if (condition) {
	  setTimeout(() => {
		resolve(products);
	  }, 3000);
	} else {
	  reject('Error 400');
	}
  });

