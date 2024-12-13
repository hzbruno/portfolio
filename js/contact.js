document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const languageToggle = document.querySelector("#language-toggle");

    let lang = languageToggle.value; // Initial language

    // Update language dynamically
    languageToggle.addEventListener("change", (event) => {
        lang = event.target.value;
    });

    // Initialize EmailJS
    emailjs.init("UtNPCPMk8Cjnr5a_M"); // Replace <YOUR_PUBLIC_KEY> with your EmailJS public key

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Validate inputs
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            alert(lang === "es" 
                ? "Por favor, completa todos los campos antes de enviar." 
                : "Please complete all fields before sending."
            );
            return;
        }

        // EmailJS parameters
        const serviceID = "service_4993lbg";
        const templateID = "template_q7jkcrf"; // Replace with your EmailJS template ID
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send email via EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                alert(lang === "es" 
                    ? "Mensaje enviado correctamente." 
                    : "Your message has been sent successfully!"
                );
                form.reset(); // Clear form
            })
            .catch((error) => {
                console.error("Failed to send message:", error);
                alert(lang === "es" 
                    ? "Ha ocurrido un error al enviar el mensaje. Intente nuevamente." 
                    : "There was an error sending your message. Please try again."
                );
            });
    });
});
