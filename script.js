 // Function to show the loader
 const showLoader = () => {
    document.getElementById('loader').style.display = 'block';
};

// Function to hide the loader
const hideLoader = () => {
    document.getElementById('loader').style.display = 'none';
};

const getData = async () => {
    let symbol = document.getElementById('crypto-pair').value;
    let url = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}`;

    // Show the loader before fetching
    showLoader();

    let response = await fetch(url, {
        headers: { 
            'X-Api-Key': '6dXAyWANNiGK55D1m4j2uA==u4vmMDlkhk939IEH',
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        alert('Error fetching data');
        return;
    }

    let data = await response.json();
    console.log(data);
    if (data.symbol && data.price) {
        document.getElementById("crypto-name").innerText = data.symbol; 
        document.getElementById("crypto-price").innerText = `$${parseFloat(data.price).toFixed(6)}`;
    } else {
        alert('Cryptocurrency not found.');
    }

   // Hide the loader after data is fetched
    hideLoader();
};

document.getElementById('btn').addEventListener('click', getData);
