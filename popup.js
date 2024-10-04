const quoteElement = document.getElementById('quote');
const category = 'happiness'; // Change this to your desired category

function fetchQuote() {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': '2s/XqU7ZmC5RoOriC8d8tA==ZRZvoHKriUtBphw6' 
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.length > 0) {
            const quote = result[0].quote; // Access the quote from the response
            quoteElement.textContent = quote;
        } else {
            quoteElement.textContent = "No quote found!";
        }
    })
    .catch(error => {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = "Error fetching quote!";
    });
}

function updateQuote() {
    fetchQuote();
    setTimeout(updateQuote, 25000); // Update quote every 10 seconds
}

// Call the updateQuote function when the document is loaded
document.addEventListener('DOMContentLoaded', updateQuote);
