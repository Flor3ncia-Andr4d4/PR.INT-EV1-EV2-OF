
const ProductList = (props) => {
  const productos = props.productos;

  if (productos.length === 0) {
    return (
      <div className="p-4">
        <p className="text-center text-red-600 bg-red-100 p-3 rounded">
          No se encontraron productos.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {productos.map((producto) => {
          return (
            <div key={producto.id} className="bg-white border p-4 rounded">
              <h2 className="text-sm font-bold">{producto.title}</h2>
              <p className="text-indigo-600">${producto.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
