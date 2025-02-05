
const chatWindow = document.getElementById('chat-window');
const messageContainer = document.getElementById('message-container');
const chatName = document.getElementById('chat-name');
const chatProfilePic = document.getElementById('chat-profile-pic');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');


const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach(item => {
    item.addEventListener('click', () => {
        
        const contactNameValue = item.getAttribute('data-name');
        const contactImg = item.getAttribute('data-img');
        
        chatName.textContent = contactNameValue;
        chatProfilePic.src = contactImg;

        chatWindow.style.display = 'block';

        messageContainer.innerHTML = '';
    });
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
     
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble');

        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes()}`;

        messageBubble.innerHTML = `
            <span class="message-text">${messageText}</span>
            <span class="message-time">${time}</span>
        `;

        messageContainer.appendChild(messageBubble);

        messageInput.value = '';

        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}


sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {    
        sendMessage();
    }
});