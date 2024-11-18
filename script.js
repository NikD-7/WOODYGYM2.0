document.addEventListener('DOMContentLoaded', function() {
  // Your existing JavaScript code here

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      showCopyMessage('Copied to clipboard!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }
  
  // Function to show a temporary message
  function showCopyMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'copy-message';
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
  
    setTimeout(function() {
      document.body.removeChild(messageElement);
    }, 2000); // Message disappears after 2 seconds
  }
  
  // Event listener for phone number
  document.getElementById('phone-number-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    copyToClipboard('(602)565-9166');
  });
  
  // Event listener for email address
  document.getElementById('email-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    copyToClipboard('Thepriceforparadise@gmail.com');
  });
});