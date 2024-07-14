document.getElementById('checkButton').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none';
    console.log('Check button clicked');
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    console.log('Current tab:', tab);
    if (tab.url) {
        console.log('Sending request to backend with URL:', tab.url);
        try {
            const response = await fetch('http://localhost:8000/check_url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({url: tab.url}),
            });
            const data = await response.json();
            resultDiv.textContent = data.result;
            if (data.result.includes('Yes')) {
                resultDiv.classList.add('alert-danger');
            }else{
                resultDiv.classList.add('alert-success');
            }
            resultDiv.style.display = 'block';
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'Error checking URL.';
        }
    } else {
        console.log('No URL found in current tab');
    }
});