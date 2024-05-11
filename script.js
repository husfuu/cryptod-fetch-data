document.addEventListener('DOMContentLoaded', function() {
    // Get the table body element
    const tbody = document.querySelector('#crypto-table tbody');

    // Get the fetch data button
    const fetchDataBtn = document.getElementById('fetch-data-btn');

    // Function to fetch data from the API and populate the table
    function fetchDataAndPopulateTable() {
        // Fetch data from the API
        fetch('https://api.coinlore.net/api/tickers/')
            .then(response => response.json()) // Parse JSON response
            .then(data => {
                // Clear existing table rows
                tbody.innerHTML = '';

                // Loop through the data array and create table rows for each cryptocurrency
                data.data.forEach(crypto => {
                    // Create a table row for each cryptocurrency
                    const row = document.createElement('tr');

                    // Populate table cells with cryptocurrency data
                    row.innerHTML = `
                        <td>${crypto.name}</td>
                        <td>${crypto.symbol}</td>
                        <td>${crypto.price_usd}</td>
                   `;

                    // Append the row to the table body
                    tbody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Add click event listener to the fetch data button
    fetchDataBtn.addEventListener('click', fetchDataAndPopulateTable);
});
