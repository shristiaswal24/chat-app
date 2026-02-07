const socket = io(); // Connects to the server

const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        // Send the message to the server
        socket.emit('chatMessage', input.value);
        input.value = '';
    }
});

// Listen for messages FROM the server
socket.on('chatMessage', (msg) => {
    const item = document.createElement('div');
    item.classList.add('msg');
    item.textContent = msg;
    messages.appendChild(item);
    
    // Auto-scroll to bottom
    messages.scrollTop = messages.scrollHeight;
});