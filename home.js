 // Set the duration for the countdown (e.g., 1 day)
const countdownDuration = 48 * 60 * 60 * 1000; // 24 hours in milliseconds

// Calculate the initial end time
let endDate = new Date().getTime() + countdownDuration;

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    // If the countdown ends, reset the end time
    if (timeLeft < 0) {
        endDate = new Date().getTime() + countdownDuration;
        return;
    }

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the HTML
    document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
}

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call


 function SendToWhasapp() {
    let number=+917075330899;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    let url="https://wa.me/" + number + "?text="
    + "Name : " + name + "%0a"
    + "Email : " + email + "%0a"
    + "Message : " + message + "%0a%0a";

    window.open(url,'_blank').focus();
 }