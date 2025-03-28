let currentMsg = 1;

// Show the first message
document.getElementById("msg1").style.display = "block";

// Function to move to the next message
function nextMsg(num) {
    document.getElementById(`msg${num}`).style.display = 'none';
    let nextMsg = document.getElementById(`msg${num + 1}`);
    if (nextMsg) nextMsg.style.display = 'block';
}

// Play music when button is clicked
function playMusic() {
    document.getElementById("song").play();
    nextMsg(5);
}

// Add decoration (background change)
function decorate() {
    document.body.style.backgroundColor = "#ff99ff";
    nextMsg(6);
}

// Fly balloons
function flyBalloons() {
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.innerHTML = "🎈";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(balloon);
    }
    
    let banner = document.createElement("div");
    banner.classList.add("banner");
    banner.innerText = "🎉 Happy Birthday, Madam Ji! 🎉";
    document.body.appendChild(banner);
    banner.style.display = "block";

    nextMsg(7);
}

// Show cake animation
function showCake() {
    let cake = document.createElement("h2");
    cake.innerHTML = "🎂 Here is the cutest cake for you, Madam Ji! 🎂";
    document.body.appendChild(cake);
    nextMsg(8);
}

// Show letter animation
function openLetter() {
    document.getElementById("letterBox").style.display = "block";
}

// Close letter
function closeLetter() {
    document.getElementById("letterBox").style.display = "none";
}
function openLetter() {
    let letterBox = document.getElementById("letterBox");
    letterBox.style.display = "block";
    letterBox.style.animation = "fadeIn 1.5s ease-in-out";
}

function closeLetter() {
    let letterBox = document.getElementById("letterBox");
    letterBox.style.animation = "fadeOut 1s ease-in-out";
    setTimeout(() => { letterBox.style.display = "none"; }, 1000);
}
function openLetter() {
    let letterBox = document.getElementById("letterBox");
    letterBox.style.display = "block";
    letterBox.style.animation = "fadeIn 1.5s ease-in-out";
}

function closeLetter() {
    let letterBox = document.getElementById("letterBox");
    letterBox.style.animation = "fadeOut 1s ease-in-out";
    setTimeout(() => { letterBox.style.display = "none"; }, 1000);
}
