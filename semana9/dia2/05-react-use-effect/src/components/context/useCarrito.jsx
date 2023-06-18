import { useState } from "react";

const useCarrito = () => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );

const agregarAlCarrito = (item) => {
  const copiaCarrito = [...carrito];
  const itemEncontrado = copiaCarrito.find((prod) => prod.id == item.id);

  if (itemEncontrado) {
    itemEncontrado.cant += 1;
    setCarrito(copiaCarrito);
  } else {
    const nuevoItemAlCarrito = { ...item };
    nuevoItemAlCarrito.item = 1;
    copiaCarrito.push(nuevoItemAlCarrito);
    setCarrito(copiaCarrito);
  }
};
const eliminarDelCarrito =(id) =>{
    const copiaCarrito = [...carrito];
    const nuevosProductos = copiaCarrito.filter((prod) => prod.id !== item.id);
    setCarrito(nuevosProductos);
}

return agregarAlCarrito, carrito,eliminarDelCarrito;
};

export default useCarrito