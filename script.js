function Typingtext() {
    const typingText = [
        " Electric type Pokémon",
        " Water type Pokémon",
        " Fire type Pokémon",
    ];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const newTextDelay = 2000;
    const textContainer = document.getElementById("typing-text");

    if (!textContainer) {
        console.error("Element with id 'typing-text' not found.");
        return;
    }

    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = typingText[textArrayIndex];
        // typing
        if (!isDeleting && charIndex < currentText.length) {
            textContainer.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        // deleting
        else if (isDeleting && charIndex > 0) {
            textContainer.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        }
        // switch to next text
        else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(type, newTextDelay);
            } else {
                isDeleting = false;
                textArrayIndex = (textArrayIndex + 1) % typingText.length;
                charIndex = 0;
                setTimeout(type, typingSpeed);
            }
        }
    }
    type();
}

function sConsole(e) {
  e.preventDefault();
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  console.log(name.value);
  console.log(email.value);
  console.log(message.value);
}

Typingtext();
document.querySelector("form").addEventListener("submit", sConsole);
