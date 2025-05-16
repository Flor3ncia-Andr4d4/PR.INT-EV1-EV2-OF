import { useEffect, useState } from "react";
import axios from "axios";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProductos(res.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white">
      {productos.map(producto => (
        <div
          key={producto.id}
          className="border border-gray-200 p-4 m-2 rounded-md bg-white"
        >
          <h2 className="text-base font-semibold text-gray-800 mb-1">
            {producto.title}
          </h2>
          <p className="text-sm text-gray-600">${producto.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
