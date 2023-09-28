document.addEventListener('DOMContentLoaded', function () {
    const callApiButton = document.getElementById('callApiButton');
    const spinner = document.getElementById('spinner');

    callApiButton.addEventListener('click', function () {
        // Show the spinner when the button is clicked
        spinner.style.display = 'block';

        // Make the API call
        fetch('https://example.com/api-endpoint')
            .then(response => response.json())
            .then(data => {
                // Process the API response here

                // Hide the spinner after receiving the response
                spinner.style.display = 'none';
            })
            .catch(error => {
                // Handle errors here

                // Hide the spinner in case of an error
                spinner.style.display = 'none';
            });
    });
});