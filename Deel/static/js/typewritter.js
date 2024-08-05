document.addEventListener("DOMContentLoaded", function () {
    const typewriterElement = document.getElementById("typewriter");
    const roles = ["Software Engineer","Web Developer", "and", "Data Analyst"];
    let roleIndex = 0;
    let charIndex = 0;
    let typingForward = true;

    function typeWriter() {
        if (typingForward) {
            typewriterElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;

            if (charIndex === roles[roleIndex].length) {
                typingForward = false;
                setTimeout(typeWriter, 2000); // Wait 2 seconds before starting to delete
            } else {
                setTimeout(typeWriter, 200); // Typing speed
            }
        } else {
            typewriterElement.textContent = typewriterElement.textContent.slice(
                0,
                -1
            );
            if (typewriterElement.textContent.length === 0) {
                typingForward = true;
                roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
                charIndex = 0; // Reset charIndex for the new role
                setTimeout(typeWriter, 500); // Pause before starting to type the next role
            } else {
                setTimeout(typeWriter, 100); // Deleting speed
            }
        }
    }

    if (typewriterElement) {
        // Ensure the element is present
        typeWriter();
    }
});
