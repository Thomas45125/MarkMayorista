// Inicializando el contador global del carrito
let cartCount = 0;

// Seleccionar todos los botones de "incrementar" y "decrementar" en cada producto
const products = document.querySelectorAll('.product');

// Iterar sobre cada producto para añadir funcionalidad individual a cada botón
products.forEach(product => {
    let quantity = 1;  // Cantidad individual para cada producto
    
    const decreaseButton = product.querySelector('.decrease');
    const increaseButton = product.querySelector('.increase');
    const quantityDisplay = product.querySelector('.quantity');
    const addToCartButton = product.querySelector('.add-to-cart');

    // Función para aumentar la cantidad
    increaseButton.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });

    // Función para disminuir la cantidad
    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    // Función para agregar al carrito
    addToCartButton.addEventListener('click', () => {
        cartCount += quantity;  // Agregar la cantidad actual al carrito global
        document.getElementById('cart-count').textContent = cartCount;

        // Resetear la cantidad a 1 después de agregar al carrito
        quantity = 1;
        quantityDisplay.textContent = quantity;
    });
});
