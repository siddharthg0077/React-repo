import React from 'react';

const products = [
  {
    id: 1,
    name: 'Chocolate Fudge Cake',
    description: 'Rich, gooey chocolate cake layered with fudge frosting.',
    price: '$49.99',
    image: '../src/Images/cake.png',
  },
  {
    id: 2,
    name: 'Red Velvet Cake',
    description: 'Moist red velvet layers with cream cheese frosting.',
    price: '$59.99',
    image: '../src/Images/cake2.png',
  },
  {
    id: 3,
    name: 'Vanilla Buttercream Cake',
    description: 'Classic vanilla cake with silky smooth buttercream.',
    price: '$39.99',
    image: '../src/Images/cake3.png',
  },
  {
    id: 4,
    name: 'Wedding Cake',
    description: 'Elegant three-tier wedding cake, perfect for your big day.',
    price: '$199.99',
    image: '../src/Images/cake4.png',
  },
  {
    id: 5,
    name: 'Black Forest Cake',
    description: 'Layers of chocolate sponge, whipped cream, and cherries.',
    price: '$54.99',
    image: '../src/Images/black Forest.png',
  },
  {
    id: 6,
    name: 'Strawberry Shortcake',
    description: 'Fresh strawberries and whipped cream on soft sponge.',
    price: '$44.99',
    image: '../src/Images/Strawberry Shortcake.png',
  },
  {
    id: 7,
    name: 'Lemon Drizzle Cake',
    description: 'Tangy lemon cake topped with a sweet citrus glaze.',
    price: '$34.99',
    image: '../src/Images/Lemon Drizzle Cake.png',
  },
  {
    id: 8,
    name: 'Carrot Cake',
    description: 'Moist carrot cake with nuts and creamy frosting.',
    price: '$42.99',
    image: '../src/Images/Carrot Cake.png',
  },
  {
    id: 9,
    name: 'Oreo Crush Cake',
    description: 'Crushed Oreos in every bite with cookies & cream frosting.',
    price: '$46.99',
    image: '../src/Images/Oreo Crush Cake.png',
  },
  {
    id: 10,
    name: 'Raspberry Cream Cake',
    description: 'A berry blast of raspberry jam and cream filling.',
    price: '$52.99',
    image: '../src/Images/Raspberry Cream Cake.png',
  },
  {
    id: 11,
    name: 'Nutella Hazelnut Cake',
    description: 'Hazelnut layers filled with creamy Nutella goodness.',
    price: '$64.99',
    image: '../src/Images/Nutella Hazelnut Cake.png',
  },
  {
    id: 12,
    name: 'Mango Mousse Cake',
    description: 'Light mango mousse with a tropical twist.',
    price: '$48.99',
    image: '../src/Images/Mango Mousse Cake.png',
  },
  {
    id: 13,
    name: 'Blueberry Cheesecake',
    description: 'Creamy cheesecake topped with sweet blueberry compote.',
    price: '$57.99',
    image: '../src/Images/Blueberry Cheesecake.png',
  },
  {
    id: 14,
    name: 'Tiramisu Cake',
    description: 'Coffee-soaked layers with mascarpone filling.',
    price: '$66.99',
    image: '../src/Images/Tiramisu Cake.png',
  },
  {
    id: 15,
    name: 'Rainbow Layer Cake',
    description: 'Colorful layers with vanilla frosting for every celebration.',
    price: '$69.99',
    image: '../src/Images/Rainbow Layer Cake.png',
  },
  {
    id: 16,
    name: 'Almond Crunch Cake',
    description: 'Fluffy almond sponge topped with toasted almond crunch.',
    price: '$51.99',
    image: '../src/Images/Almond Crunch Cake.png',
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">🍰 Our Delicious Cakes 🎂</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-blue-600 text-lg font-bold">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
