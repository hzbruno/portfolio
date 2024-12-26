document.addEventListener("DOMContentLoaded", () => {
 // Language toggle logic
    const languageToggle = document.querySelector("#language-toggle");
    const texts = {
        en: {
            linkabout: "About me",
            linkprojects: "Projects",
            linkcontact: "Contact",

            hello: "Hi, I'm",
            proffesion: "Software Developer",
            btnResume: "Download CV",

            aboutMe: "About Me",
            aboutMeDescription: "Hello, my name is Bruno Hernández. I am a Software Engineer Student from Uruguay.<br>I have a strong talent for self-research and self-education, which helps me stay updated and continuously improve my skills.Additionally, I work at my family's tech and general goods store in my local city,<br> where I am actively involved as a customer service advisor,assisting clients and ensuring a positive experience.",
            knowledge: "Knowledge",

            recentProjects: "Recent Projects",

            VolandoUYDescripcion: "Airline system with a central server in Java (Swing) and a web server (JSP, servlets), synchronized through web services. Allows customers to book flights and airlines to manage routes and flights, with changes reflected simultaneously on both servers. It uses OOP, design patterns and custom base types.",
            dessVUY: "Developed with HTML, CSS , JavaScript, Servlets, Java, Maven",

            UTU:"Developed in my last year of high school, it is a Unity game made up of a collection of minigames. The project involved creating interactive mechanics, engaging visual design, and a well-organized structure to ensure a fluid and dynamic experience for players.",
            dessUTU:"Developed with C# in Unity",

            centralD:"Developed in Swing, this component represents the central server of the project, responsible for managing the main logic and starting the web services for communication with other modules.",
            dessVUYC:"Developed with Java and Swing in eclipse",

            contactTitle: "Contact Me",
            nombreContacto: "Name:",
            mensajeContacto:"Message:",
            botonEnviar:"Send",

        },
        es: {
            linkabout: "Sobre Mi",
            linkprojects: "Projectos",
            linkcontact: "Contacto",

            hello: "Hola, soy",
            proffesion: "Desarrollador de Software",
            btnResume: "Descargar CV",

            aboutMe: "Sobre Mi",
            aboutMeDescription: "Hola, mi nombre es Bruno Hernández. Soy estudiante de Ingeniería de Software de Uruguay.<br>Tengo un gran talento para la autoinvestigación y la autoeducación, lo que me ayuda a mantenerme actualizado y mejorar continuamente mis habilidades.<br>Además, trabajo en la tienda de tecnología y artículos generales de mi familia en mi ciudad local,donde participo activamente como asesor de servicio al cliente, ayudándolos y garantizando una experiencia positiva.",
            knowledge: "Mis Conocimientos",

            recentProjects: "Projectos Recientes",

            VolandoUYDescripcion: "Sistema de aerolínea con un servidor central en Java (Swing) y un servidor web (JSP, servlets), sincronizados mediante servicios web. Permite a los clientes reservar vuelos y a las aerolíneas gestionar rutas y vuelos, con los cambios reflejados simultáneamente en ambos servidores. Utiliza programación orientada a objetos, patrones de diseño y tipos de base personalizados.",
            dessVUY: "Desarrollado con HTML, CSS , JavaScript, Servlets, Java, Maven",

            UTU:"Desarrollado en mi último año de secundaria, es un juego de Unity compuesto por una colección de minijuegos. El proyecto implicó la creación de mecánicas interactivas, un diseño visual atractivo y una estructura bien organizada para garantizar una experiencia fluida y dinámica para los jugadores.",
            dessUTU:"Desarrollado con C# en Unity",

            centralD:"Desarrollado en Swing, este componente representa el servidor central del proyecto, responsable de gestionar la lógica principal e iniciar los servicios web para la comunicación con otros módulos.",
            dessVUYC:"Desarrollado con Java y Swing en eclipse",

            contactTitle: "Contactame",
            nombreContacto: "Nombre:",
            mensajeContacto:"Mensaje:",
            botonEnviar:"Enviar",
           
        },
    };

    languageToggle?.addEventListener("change", (event) => {
        const lang = event.target.value;
        document.querySelector("#linkabout").textContent = texts[lang].linkabout;
        document.querySelector("#linkprojects").textContent = texts[lang].linkprojects;
        document.querySelector("#linkcontact").textContent = texts[lang].linkcontact;

        document.querySelector("#hello").textContent = texts[lang].hello;
        document.querySelector("#proffesion").textContent = texts[lang].proffesion;
        document.querySelector("#btnResume").textContent = texts[lang].btnResume;

        document.querySelector("#aboutMe").textContent = texts[lang].aboutMe;
        document.querySelector("#aboutMeDescription").innerHTML = texts[lang].aboutMeDescription;
        document.querySelector("#knowledge").textContent = texts[lang].knowledge;

        document.querySelector("#recentProjects").textContent = texts[lang].recentProjects;

        document.querySelector("#VolandoUYDescripcion").textContent = texts[lang].VolandoUYDescripcion;
        document.querySelector("#dessVUY").textContent = texts[lang].dessVUY;

        document.querySelector("#UTU").textContent = texts[lang].UTU;
        document.querySelector("#dessUTU").textContent = texts[lang].dessUTU;

        document.querySelector("#centralD").textContent = texts[lang].centralD;
        document.querySelector("#dessVUYC").textContent = texts[lang].dessVUYC;

        document.querySelector("#contactTitle").textContent = texts[lang].contactTitle;
        document.querySelector("#nombreContacto").textContent = texts[lang].nombreContacto;
        document.querySelector("#mensajeContacto").textContent = texts[lang].mensajeContacto;
        document.querySelector("#botonEnviar").textContent = texts[lang].botonEnviar;

        
        
    });
});