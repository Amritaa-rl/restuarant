document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from the form
    const dish = document.getElementById('dish').value;
    const quantity = document.getElementById('quantity').value;

    // Display the order summary
    let orderSummary = `
        <h3>Order Summary:</h3>
        <p>You ordered ${quantity} x ${dish}</p>
        <p>Total: $${quantity * 10}</p> <!-- Assuming each dish costs $10 for simplicity -->
    `;

    document.getElementById('order-summary').innerHTML = orderSummary;
});
