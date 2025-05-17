import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import StatsPanel from "./StatsPanel";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProductos(res.data.products))
      .catch(err => console.error(err));
  }, []);

  const productosFiltrados = busqueda.trim() === ""
    ? productos
    : productos.filter(producto =>
        producto.title.toLowerCase().includes(busqueda.toLowerCase())
      );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <StatsPanel productos={productosFiltrados} />
      <ProductList productos={productosFiltrados} />
    </div>
  );
};

export default Productos;
