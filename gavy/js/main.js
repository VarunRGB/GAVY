// Booking Functionality
const bookingForm = document.getElementById("booking-form");
const notificationDiv = document.getElementById("booking-notification");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const mentor = document.getElementById("mentor").value;
    const timeslot = document.getElementById("timeslot").value;
    
    notificationDiv.innerHTML = You have successfully booked a session with ${mentor} at ${timeslot}.;
});

// Chat functionality placeholder (you can expand this as needed for a simple chat system)
function sendMessage() {
    const message = document.getElementById("chat-input").value;
    const messageBox = document.getElementById("messages");
    messageBox.innerHTML += <p>${message}</p>;
    document.getElementById("chat-input").value = "";
}