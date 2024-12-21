document.getElementById('getFactButton').addEventListener('click', function () {
    const number = document.getElementById('number').value;

    if (number === '' || isNaN(number)) {
        alert('Please enter a valid number');
        return;
    }

    fetch(`http://numbersapi.com/${number}?json`)
        .then(response => response.json()) 
        .then(data => {
            document.getElementById('fact').innerText = data.text;
        })
        .catch(error => {
            console.error('Error fetching the fact:', error);
            alert('Sorry, there was an error fetching the fact.');
        });
});


document.getElementById('randomFactButton').addEventListener('click', function () {
    fetch('http://numbersapi.com/random?json')
        .then(response => response.json())  
        .then(data => {
            document.getElementById('fact').innerText = data.text;
        })
        .catch(error => {   
            console.error('Error fetching the random fact:', error);
            alert('Sorry, there was an error fetching the random fact.');
        });
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('../sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }