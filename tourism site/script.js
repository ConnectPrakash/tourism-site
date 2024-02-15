const countdownItems = document.querySelectorAll('.countdown');

function updateCountdown() {
    const now = new Date().getTime();

    countdownItems.forEach(item => {
        const eventDate = new Date(item.dataset.eventDate).getTime();
        const diff = eventDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const countdownString = `${days} days ${hours}h ${minutes}m ${seconds}s`;
            item.textContent = countdownString;
        } else {
            item.textContent = "Event has passed";
        }
    });
}

setInterval(updateCountdown, 1000); // Update countdown every second
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasErrors = false;

    // Validate name
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        errorMessages[0].textContent = 'Please enter your name.';
        errorMessages[0].style.display = 'block';
        hasErrors = true;
    } else {
        nameInput.classList.remove('error');
        errorMessages[0].style.display = 'none';
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.classList.add('error');
        errorMessages[1].textContent = 'Please enter a valid email address.';
        errorMessages[1].style.display = 'block';
        hasErrors = true;
    } else {
        emailInput.classList.remove('error');
        errorMessages[1].style.display = 'none';
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        errorMessages[2].textContent = 'Please enter a message.';
        errorMessages[2].style.display = 'block';
        hasErrors = true;
    } else {
        messageInput.classList.remove('error');
        errorMessages[2].style.display = 'none';
    }

    if (!hasErrors) {
        // Form is valid, submit it
        form.submit();
    }
});
