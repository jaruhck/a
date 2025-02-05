const messages = [
    "Estas segura?",
    "Totalmente segura??",
    "Totaaaaaalmente segura?",
    "porfavorrrr cath...",
    "Solo piensalo!",
    "Si dices que no, voy a estar realmente muy triste...",
    "muuuuuuuy triste...",
    "muymuymuymuymuy triste...",
    "Okay esta bien, voy dejar de preguntar :c...",
    "es joda, di que si cath :D! "
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}