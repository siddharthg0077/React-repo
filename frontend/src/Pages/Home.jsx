import React, { useState } from 'react';

const Home = () => {
  const thumbnails = [
    "../src/Images/cake.png",
    "../src/Images/cake2.png",
    "../src/Images/cake3.png",
    "../src/Images/cake4.png",
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);

  const products = [
    {
      id: 1,
      name: '2 Layer Cake',
      price: '$49.99',
      image: "../src/Images/cake.png",
    },
    {
      id: 2,
      name: 'Wedding Cake',
      price: '$129.99',
      image: "../src/Images/cake2.png",
    },
    {
      id: 3,
      name: 'Whey Protein Cake',
      price: '$89.99',
      image: "../src/Images/cake3.png",
    },
    {
      id: 4,
      name: 'Large Cake',
      price: '$59.99',
      image: "../src/Images/cake4.png",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-blue-50 flex flex-col items-center justify-start p-6 space-y-16">
       {/* Page Title */}
  <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 text-center drop-shadow-md">
    🎂 Welcome To <span className="text-pink-600">Cake Haven</span> 🎉
  </h1>
      {/* Image Gallery */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-6xl">
        <div className="w-full">
          <img
            id="main-image"
            src={mainImage}
            className="w-full rounded-lg shadow-md"
            alt="Main"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              src={src}
              className="thumb rounded-lg h-20 sm:h-28 md:h-32 object-cover cursor-pointer hover:opacity-80 transition duration-200 ease-in-out w-full"
              alt={`Thumb ${index + 1}`}
              onClick={() => setMainImage(src)}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Buy Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
