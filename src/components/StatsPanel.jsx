const StatsPanel = (props) => {
  const productos = props.productos;

  if (productos.length === 0) {
    return null;
  }

  let masCaro = productos[0];
  let masBarato = productos[0];
  let sumaPrecios = 0;
  let sumaDescuentos = 0;
  let largos = 0;

  for (let i = 0; i < productos.length; i++) {
    const p = productos[i];

    if (p.price > masCaro.price) {
      masCaro = p;
    }

    if (p.price < masBarato.price) {
      masBarato = p;
    }

    if (p.title.length > 20) {
      largos++;
    }

    sumaPrecios += p.price;
    sumaDescuentos += p.discountPercentage;
  }

  const promedioPrecio = (sumaPrecios / productos.length).toFixed(2);
  const promedioDescuento = (sumaDescuentos / productos.length).toFixed(2);

  return (
    <div className="p-4 bg-blue-50 mb-6 rounded shadow fade-in">
      <h2 className="text-xl font-bold mb-3 text-blue-900">Estadísticas</h2>
      <p><strong>Producto más caro:</strong> {masCaro.title} - ${masCaro.price}</p>
      <p><strong>Producto más barato:</strong> {masBarato.title} - ${masBarato.price}</p>
      <p><strong>Productos con título largo (&gt; 20 caracteres):</strong> {largos}</p>
      <p><strong>Precio total:</strong> ${sumaPrecios.toFixed(2)}</p>
      <p><strong>Promedio de descuento:</strong> {promedioDescuento}%</p>
      <p><strong>Promedio de precios:</strong> ${promedioPrecio}</p>
    </div>
  );
};

export default StatsPanel;
