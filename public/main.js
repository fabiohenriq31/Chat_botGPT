document.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.getElementById('btn-submit');
    btnSubmit.addEventListener('click', sendMessage);
});

function sendMessage() {
    const message = document.getElementById('message-input');
    if (!message.value) {
        message.style.border = '1px solid red';
        return;
    }
    message.style.border = 'none';
    const status = document.getElementById('status');
    const btnSubmit = document.getElementById('btn-submit');

    status.style.display = 'block';
    status.innerHTML = 'Carregando...';
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed';
    message.disabled = true;

    console.log("Sending request to OpenAI API...");

    fetch("/api/sendMessage", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: message.value
        })
    })
    .then(response => {
        console.log("Received response from server:", response);
        return response.json();
    })
    .then(data => {
        if (data.error) {
            throw new Error(data.error.message);
        }
        console.log("Parsed response JSON:", data);
        let returning = data.choices[0].text;
        status.style.display = 'none';
        showHistoric(message.value, returning);
    })
    .catch(error => {
        console.error("Error:", error);
        status.innerHTML = 'Erro ao carregar, tente novamente.';
    })
    .finally(() => {
        btnSubmit.disabled = false;
        btnSubmit.style.cursor = 'pointer';
        message.disabled = false;
    });
}

function showHistoric(message, response) {
    const historic = document.getElementById('historic');

    // my messages
    const boxMyMessage = document.createElement('div');
    boxMyMessage.className = 'box-my-message';

    const myMessage = document.createElement('p');
    myMessage.className = 'my-message';
    myMessage.innerHTML = message;

    boxMyMessage.appendChild(myMessage);
    historic.appendChild(boxMyMessage);

    // response messages
    const boxResponseMessage = document.createElement('div');
    boxResponseMessage.className = 'box-response-message';

    const chatResponse = document.createElement('p');
    chatResponse.className = 'chat-message';
    chatResponse.innerHTML = response;

    boxResponseMessage.appendChild(chatResponse);
    historic.appendChild(boxResponseMessage);

    historic.scrollTop = historic.scrollHeight;
}
