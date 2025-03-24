const emojiContainer = document.querySelector('.floating-emojis');

// Array of love-themed emojis
const emojis = ['❤️', '💖', '💘', '💕', '💞', '💓', '💗'];

// Function to create a floating "I Love You" message with emoji
function createLoveMessage() {
  const loveMessage = document.createElement('div');
  loveMessage.classList.add('love-message');

  // Randomize emoji and styles
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  loveMessage.innerHTML = `I Love You ${randomEmoji}`;

  // Random horizontal position along the bottom of the screen
  loveMessage.style.left = `${Math.random() * 100}%`; // Random horizontal starting point
  loveMessage.style.bottom = '0'; // Start at the bottom
  loveMessage.style.fontSize = `${Math.random() * 2 + 1.5}rem`; // Random font size
  loveMessage.style.animationDuration = `${Math.random() * 4 + 5}s`; // Random animation duration
  loveMessage.style.color = 'white'; // Keep the color of "I Love You" text constant (white)

  emojiContainer.appendChild(loveMessage);

  // Remove love message after animation
  setTimeout(() => {
    loveMessage.remove();
  }, 8000);
}

// Create multiple love messages at once
function createMultipleLoveMessages(count) {
  for (let i = 0; i < count; i++) {
    createLoveMessage();
  }
}

// Generate love messages at regular intervals
setInterval(() => createMultipleLoveMessages(5), 500); // Adds 5 messages every 500ms
