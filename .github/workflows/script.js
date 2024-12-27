// Simulated AI response function
function generateAIResponse(userInput) {
    // Here, you can add real AI integrations or make random responses
    const responses = [
        "I’m Lai, your friendly AI assistant! How can I help?",
        "That's an interesting question! Let me think about it.",
        "I’m still learning, but I can give you a response.",
        "My circuits are buzzing... Let me try to understand better.",
        "I can help you with that! Let's explore more."
    ];

    // Choose a random response
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to send the message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput.trim()) return;  // Don't send empty messages

    // Display user message
    displayMessage(userInput, 'user');

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Generate AI response and display
    setTimeout(() => {
        const aiResponse = generateAIResponse(userInput);
        displayMessage(aiResponse, 'ai');
    }, 1000);  // Simulate typing delay
}

// Function to display messages in the chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.innerText = message;

    chatBox.appendChild(messageDiv);

    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Auto focus on the input field for convenience
document.getElementById('user-input').focus();
