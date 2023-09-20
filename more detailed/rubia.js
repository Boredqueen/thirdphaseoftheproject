document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('increase')) {
            const quantityInput = event.target.parentElement.querySelector('.quantity-input');
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateSubtotal(event.target);
        } else if (event.target.classList.contains('decrease')) {
            const quantityInput = event.target.parentElement.querySelector('.quantity-input');
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateSubtotal(event.target);
            }
        } else if (event.target.classList.contains('remove')) {
            const cartItem = event.target.closest('.Cart-Items');
            cartItem.style.display = 'none';
        }
    });

    function updateSubtotal(clickedElement) {
        const parentDiv = clickedElement.parentElement;
        const quantityInput = parentDiv.querySelector('.quantity-input');
        const subtotalSpan = parentDiv.querySelector('.subtotal');
        const price = 12000; // Replace with actual item price
        const quantity = parseInt(quantityInput.value);
        const subtotal = price * quantity;
        subtotalSpan.textContent = subtotal;
    }
});