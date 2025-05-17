const StatsPanel = ({ productos }) => {
  if (!productos.length) return null;

  const masCaro = productos.reduce((max, p) => (p.price > max.price ? p : max));
  const masBarato = productos.reduce((min, p) => (p.price < min.price ? p : min));
  const largos = productos.filter(p => p.title.length > 20).length;
  const total = productos.reduce((sum, p) => sum + p.price, 0);
  const promedioDescuento = (
    productos.reduce((sum, p) => sum + p.discountPercentage, 0) / productos.length
  ).toFixed(2);
  const promedioPrecio = (total / productos.length).toFixed(2);

  return (
    <div className="p-4 bg-blue-50 mb-6 rounded shadow fade-in">
      <h2 className="text-xl font-bold mb-3 text-blue-900"> Estadísticas</h2>
      <p><strong>Producto más caro:</strong> {masCaro.title} - ${masCaro.price}</p>
      <p><strong>Producto más barato:</strong> {masBarato.title} - ${masBarato.price}</p>
      <p><strong>Productos con título largo (&gt; 20 caracteres):</strong> {largos}</p>
      <p><strong>Precio total:</strong> ${total.toFixed(2)}</p>
      <p><strong>Promedio de descuento:</strong> {promedioDescuento}%</p>
      <p><strong>Promedio de precios:</strong> ${promedioPrecio}</p>
    </div>
  );
};

export default StatsPanel;
