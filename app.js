const API_URL = 'http://localhost:3005/time';

async function fetchTime() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        document.getElementById('time').textContent = data.time;
        document.getElementById('date').textContent = data.date;
        document.getElementById('status').textContent = '●';
        document.getElementById('status').className = 'status success';
    } catch (error) {
        console.error('Error fetching time:', error);
        document.getElementById('status').textContent = '● Connection error';
        document.getElementById('status').className = 'status error';
    }
}

// Fetch time immediately and then every second
fetchTime();
setInterval(fetchTime, 1000);