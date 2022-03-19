const products = [
	{ id: '0', category: 'Remeras', title: 'Remera Lisa', size: ['S', 'M', 'L', 'XL'], price: 3500, discount: 15, colour: 'Blanco', brand: 'Adidas', gender: 'men', stock: 20, age: 'adult', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/553e44ca7b6c4b6792faac3a00f5ca48_9366/Remera_Adicolor_Classics_3_Tiras_Blanco_GN3494_01_laydown.jpg' },
	{ id: '1', category: 'Remeras', title: 'Remera Estampa', size: ['XS', 'M'], price: 4999, discount: 0, colour: 'Negro', brand: 'Adidas', gender: 'women', stock: 10, age: 'adult', imageUrl: 'https://woker.vteximg.com.br/arquivos/ids/248797-1000-1000/6H35646-000-2.jpg?v=637734319660700000' },
	{ id: '2', category: 'Pantalones', title: 'Pantalon Clásico Recto', size: ['32', '34', '36', '40'], price: 12000, discount: 20, colour: 'Beige', brand: 'Nike', gender: 'men', stock: 8, age: 'adult', imageUrl: 'https://prototypearg.vtexassets.com/arquivos/ids/216891-1200-auto?v=637561011502100000&width=1200&height=auto&aspect=true' },
	{ id: '3', category: 'Pantalones', title: 'Pantalón Liso Mujer', size: ['24', '26', '28', '30'], price: 9999, discount: 0, colour: 'Negro', brand: 'Nike', gender: 'women', stock: 12, age: 'adult', imageUrl: 'https://sportline.vteximg.com.br/arquivos/ids/563211-110-110/077270CU4321010_1.jpg?v=637642845980930000' },
	{ id: '4', category: 'Buzos', title: 'Buzo Canguro Sport', size: ['S', 'M', 'L', 'XL'], price: 8500, discount: 15, colour: 'Negro', brand: 'Adidas', gender: 'men', stock: 10, age: 'adult', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/134ce71b3d534771a264aaab00f1094e_9366/Buzo_con_capucha_adidas_Adicolor_Trifolio_Negro_FM3307_01_laydown.jpg' },
	{ id: '5', category: 'Buzos', title: 'Buzo Mujer Liso Fitness', size: ['XS', 'S', 'L', 'XL'], price: 6500, discount: 15, colour: 'Rosa', brand: 'Topper', gender: 'women', stock: 4, age: 'adult', imageUrl: 'https://sportline.vteximg.com.br/arquivos/ids/597133-1000-1000/801215000164487_1.jpg?v=637769748663600000' },
	{ id: '6', category: 'Camperas', title: 'Campera Lisa', size: ['S', 'M'], price: 3500, discount: 15, colour: 'White', brand: 'Adidas', gender: 'men', stock: 200, age: 'adult', imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/be22644f0e8c4504ae6fad1a0099d9bd_9366/Campera_Deportiva_Essentials_3_Tiras_Tejida_Blanco_H14635_01_laydown.jpg' },
	{ id: '7', category: 'Musculosas', title: 'Musculosa Niño Estampa', size: ['8', '10', '12'], price: 2500, discount: 20, colour: 'White', brand: 'Nike', gender: 'men', stock: 16, age: 'kid', imageUrl: 'https://sevensport.vteximg.com.br/arquivos/ids/270859-500-500/AR4991101_1-1-.jpg?v=637280141667370000' },
	{ id: '8', category: 'Camisas', title: 'Camisa Niño Jean', size: ['10', '12', '16'], price: 5400, discount: 0, colour: 'Blue', brand: 'Legacy', gender: 'men', stock: 15, age: 'kid', imageUrl: 'https://www.cheeky.com.ar/uploads/picture/image/103425/CHK67141_SW_1.jpg' }
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

