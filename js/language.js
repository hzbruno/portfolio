document.addEventListener("DOMContentLoaded", () => {
 // Language toggle logic
    const languageToggle = document.querySelector("#language-toggle");
    const texts = {
        en: {
            about: "About Me",
            aboutp: "Software Engineering student, currently in the fourth year of the degree.",
            knowledge: "My Knowledge",
            projects: "Recent Projects",
            contact: "Contact",
            heroSubtitle: "Software Developer",
            button: "View Projects",
            utu:"Developed in my last year of high school, it is a Unity game made up of a collection of minigames. The project involved creating interactive mechanics, engaging visual design, and a well-organized structure to ensure a fluid and dynamic experience for players.",
            vuyd:"Airline system with a central server in Java (Swing) and a web server (JSP, servlets), synchronized through web services. Allows customers to book flights and airlines to manage routes and flights, with changes reflected simultaneously on both servers. It uses OOP, design patterns and custom base types.",
            vuye:"Link to representative video of the page",
            centralT:"VolandoUY Central Server",
            centralD:"Developed in Swing, this component represents the central server of the project, responsible for managing the main logic and starting the web services for communication with other modules.",
            vuyn:"The image leads to a static page with the intention of showing the proposed base design.",

            nombreC:"Name",
            mensajeC:"Message",
            enviarC:"Send",

            linkabout:"About Me",
            linkknowledge:"Knowledge",
            linkprojects:"Recent Projects",
            linkcontact:"Contact",

            heroTitle2:"Hi, I'm ",

            DUTUT:"Developed with C# in Unity",
            DVUY:"Developed with HTML, CSS , JavaScript, Servlets, Java, Maven",
            DVUYC:"Developed with Java and Swing in eclipse",
        },
        es: {
            about: "Sobre mí",
            aboutp: "Estudiante de Ingeniería de Software, actualmente en el cuarto año de la carrera.",
            knowledge: "Mis Conocimientos",
            projects: "Proyectos Recientes",
            contact: "Contacto",
            heroSubtitle: "Desarrollador de Software",
            button: "Ver Proyectos",
            utu:"Desarrollado en mi último año de secundaria, es un juego en Unity compuesto por una colección de minijuegos. El proyecto involucró la creación de mecánicas interactivas, diseño visual atractivo y una estructura bien organizada para garantizar una experiencia fluida y dinámica para los jugadores.",
            vuyd:"Sistema de aerolíneas con un servidor central en Java (Swing) y un servidor web (JSP, servlets), sincronizados mediante web services. Permite a los clientes reservar vuelos y a las aerolíneas gestionar rutas y vuelos, con cambios reflejados simultáneamente en ambos servidores. Utiliza POO, patrones de diseño y tipos básicos personalizados.",
            vuye:"Enlace a video representativo de la página",
            centralD:"Desarrollado en Swing, este componente representa el servidor central del proyecto, encargado de gestionar la lógica principal y de iniciar los web services para la comunicación con otros módulos.",
            centralT:"Servidor Central de VolandoUY",
            vuyn:"La imagen lleva a una página estática con la intención de mostrar el diseño base planteado.",
            
            nombreC:"Nombre",
            mensajeC:"Mensaje",
            enviarC:"Enviar",

            linkabout:"Sobre Mi",
            linkknowledge:"Mis Conocimientos",
            linkprojects:"Proyectos Recientes",
            linkcontact:"Contacto",

            heroTitle2:"Hola, soy ",

            DUTUT:"Desarrollado con C# en Unity",
            DVUY:"Desarrollado con HTML, CSS, JavaScript, Servlets, Java, Maven",
            DVUYC:"Desarrollado con Java y Swing en eclipse.",
        },
    };

    languageToggle?.addEventListener("change", (event) => {
        const lang = event.target.value;
        document.querySelector("#UTU").textContent = texts[lang].utu;
        document.querySelector("#VolandoUYDescripcion").textContent = texts[lang].vuyd;
        document.querySelector("#volandouyNota").textContent = texts[lang].vuyn;
        document.querySelector("#volandouyEnlace").textContent = texts[lang].vuye;
        document.querySelector("#centralD").textContent = texts[lang].centralD;

        document.querySelector("#nombreContacto").textContent = texts[lang].nombreC;
        document.querySelector("#mensajeContacto").textContent = texts[lang].mensajeC;
        document.querySelector("#botonEnviar").textContent = texts[lang].enviarC;

        document.querySelector("#linkabout").textContent = texts[lang].linkabout;
        document.querySelector(".titleK h2").textContent = texts[lang].linkknowledge;
        document.querySelector(".titleP h2").textContent = texts[lang].linkprojects;
        document.querySelector("#linkcontact").textContent = texts[lang].linkcontact;

        document.querySelector("#about h2").textContent = texts[lang].about;
        document.querySelector("#about p").textContent = texts[lang].aboutp;

        document.querySelector("#contact h2").textContent = texts[lang].contact;
        document.querySelector("#botoncontacto").textContent = texts[lang].contact;

        document.querySelector("#hero h2").textContent = texts[lang].heroTitle2;
        document.querySelector("#hero p").textContent = texts[lang].heroSubtitle;

        document.querySelector("#dessUTU").textContent = texts[lang].DUTUT;
        document.querySelector("#dessVUY").textContent = texts[lang].DVUY;
        document.querySelector("#dessVUYC").textContent = texts[lang].DVUYC;
        
    });
});