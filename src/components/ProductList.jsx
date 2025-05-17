const ProductList = ({ productos }) => {
  return (
    <div className="p-6 bg-[#f0f4f8] fade-in min-h-screen">
      {productos.length === 0 ? (
        <div className="text-center text-red-600 font-semibold p-4 bg-red-100 rounded shadow">
          No se encontraron productos con ese nombre.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {productos.map(producto => (
            <div
              key={producto.id}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-base font-semibold text-gray-800 mb-2">
                {producto.title}
              </h2>
              <p className="text-sm text-indigo-600 font-medium">${producto.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
