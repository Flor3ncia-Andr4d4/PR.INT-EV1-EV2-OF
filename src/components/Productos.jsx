
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import StatsPanel from "./StatsPanel";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);
      })
      .catch((error) => {
        console.log("Error al cargar los productos:", error);
      });
  }, []);

  const productosFiltrados = productos.filter((producto) => {
    return producto.title.toLowerCase().includes(busqueda.toLowerCase());
  });

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar productos"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-2 border mb-4 rounded"
      />

      <StatsPanel productos={productosFiltrados} />
      <ProductList productos={productosFiltrados} />
    </div>
  );
};

export default Productos;
