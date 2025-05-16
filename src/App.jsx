import './App.css';
import Productos from "./components/Productos";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Lista de Productos
      </h1>
      <Productos />
    </div>
  );
}

export default App;