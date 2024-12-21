document.getElementById('getFactButton').addEventListener('click', function () {

    const number = document.getElementById('number').value.trim();

    const url = number ? `http://numbersapi.com/${number}?json` : `http://numbersapi.com/random?json`;


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('fact').innerText = data.text || 'No fact found.';
        })
        .catch(error => {
            console.error('Error fetching the fact:', error);
            document.getElementById('fact').innerText = 'Sorry, there was an error fetching the fact.';
        });
});
