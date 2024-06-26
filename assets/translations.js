const translations = {
    en: {
        welcome: "Welcome to FlexPal",
        heroDescription: "Find freedom in every movement and achieve that dreamed and healthy body you are looking for.",
        discoverPlans: "Discover the plans we have for you",
        aboutUsTitle: "Get to know us!",
        whoWeAre: "Who are we?",
        whoWeAreDescription: "We are a startup called 'Gymfinity'. A group of people who have come together to create a physically active and healthy community, providing functions that meet the convenience of all our users.",
        visionAndObjective: "Vision and Objective",
        mission: "Mission:",
        missionDescription: "Our mission is to promote a healthy life through practical advice about exercises and nutrition, helping people achieve their goals.",
        objective: "Objective:",
        objectiveDescription: "Our goal is to provide easy-to-understand information and resources that inspire people to adopt healthy habits.",
        joinTitle: "Join FlexPal today!",
        testPlan: "Test Plan",
        testPlanDescription: "Try our Test Plan to access personalized nutrition plans and adapted exercise routines. Start your journey to a healthier lifestyle today!",
        subscribe: "Subscribe",
        monthlyPlan: "Monthly Plan",
        monthlyPlanDescription: "Achieve sustainable results with our Monthly Plan. Access personalized nutrition plans, expert trainers, and progress tracking. Reach your fitness goals month by month!",
        annualPlan: "Annual Plan",
        annualPlanDescription: "Commit to your wellness with our Annual Plan. Access all FitHub benefits throughout the year. Make your health a priority and achieve your fitness goals!",
        videosTitle: "Our Videos",
        aboutTeam: "About the Team",
        aboutProduct: "About the Product",
        testimonialsTitle: "User Testimonials",
        testimonial1: "I was looking for an app that would connect me with users looking for my specialty, thanks to FlexPal, I finally found it.",
        user1: "- Renzo Enciso",
        testimonial2: "I love how the app facilitates daily tracking of my progress and gives me the support I need to stay focused on my health goals.",
        user2: "- Rosa Barrios",
        testimonial3: "The app's resources make my job as a coach easier, allowing me to provide more effective and personalized support to my clients.",
        user3: "- Andrés Torres",
        contactUsTitle: "Contact Us!",
        contactUsDescription: "At FlexPal, we value each of your questions, comments, and suggestions. Our team is here to provide the help you need. Don't hesitate to contact us!",
        name: "Name:",
        email: "Email:",
        phone: "Phone Number:",
        address: "Address:",
        content: "Content:",
        send: "Send",
        labelNombre: "Name:",
        labelCorreo: "Email:",
        labelTelefono: "Phone Number:",
        labelDireccion: "Address:",
        labelContenido: "Message:",
        btnEnviar: "Send"
    },
    es: {
        welcome: "Bienvenido a FlexPal",
        heroDescription: "Encuentra libertad en cada movimiento y consigue aquel cuerpo soñado y saludable que estás buscando.",
        discoverPlans: "Descubre los planes que tenemos para ti",
        aboutUsTitle: "¡Conócenos!",
        whoWeAre: "¿Quiénes somos?",
        whoWeAreDescription: "Somos una startup llamada 'Gymfinity'. Un grupo de personas que se han unido para crear una comunidad físicamente activa y saludable, brindando funciones que satisfacen la conveniencia de todos nuestros usuarios.",
        visionAndObjective: "Visión y objetivo",
        mission: "Misión:",
        missionDescription: "Nuestra misión es fomentar una vida saludable a través de consejos prácticos acerca de ejercicios y nutrición, ayudando a las personas a alcanzar sus objetivos.",
        objective: "Objetivo:",
        objectiveDescription: "Nuestro objetivo es proporcionar información y recursos fáciles de entender que inspiren a las personas a adoptar hábitos saludables.",
        joinTitle: "¡Únete a FlexPal hoy!",
        testPlan: "Plan de Prueba",
        testPlanDescription: "Prueba nuestro Plan de Prueba para acceder a planes de nutrición personalizados y rutinas de ejercicio adaptadas. ¡Comienza tu viaje hacia un estilo de vida más saludable hoy!",
        subscribe: "Suscribirse",
        monthlyPlan: "Plan Mensual",
        monthlyPlanDescription: "Consigue resultados sostenibles con nuestro Plan Mensual. Accede a planes de nutrición personalizados, entrenadores expertos y seguimiento de progreso. ¡Alcanza tus metas de fitness mes a mes!",
        annualPlan: "Plan Anual",
        annualPlanDescription: "Comprométete con tu bienestar con nuestro Plan Anual. Accede a todos los beneficios de FitHub durante todo el año. ¡Haz de tu salud una prioridad y alcanza tus objetivos de fitness!",
        videosTitle: "Nuestros Videos",
        aboutTeam: "Sobre el Equipo",
        aboutProduct: "Sobre el Producto",
        testimonialsTitle: "Testimonios de Usuarios",
        testimonial1: "Buscaba una aplicación que me conectara con usuarios que buscaran mi especialidad, gracias a FlexPal, al fin lo encontré.",
        user1: "- Renzo Enciso",
        testimonial2: "Me encanta cómo la aplicación facilita el seguimiento diario de mi progreso y me brinda el apoyo necesario para mantenerme enfocado en mis objetivos de salud.",
        user2: "- Rosa Barrios",
        testimonial3: "Los recursos de la aplicación facilitan mi labor como coach, permitiéndome brindar un apoyo más efectivo y personalizado a mis clientes.",
        user3: "- Andrés Torres",
        contactUsTitle: "¡Contáctanos!",
        contactUsDescription: "En FlexPal, valoramos cada una de tus preguntas, comentarios y sugerencias. Nuestro equipo está aquí para proporcionarte la ayuda que necesitas. ¡No dudes en contactarnos!",
        name: "Nombre:",
        email: "Correo Electrónico:",
        phone: "Número de Teléfono:",
        address: "Dirección:",
        content: "Contenido:",
        send: "Enviar",
        labelNombre: "Nombre:",
        labelCorreo: "Correo Electrónico:",
        labelTelefono: "Número de Teléfono:",
        labelDireccion: "Dirección:",
        labelContenido: "Contenido:",
        btnEnviar: "Enviar"

    }
};

function changeLanguage(language) {
    document.getElementById('welcome').innerText = translations[language].welcome;
    document.getElementById('heroDescription').innerText = translations[language].heroDescription;
    document.getElementById('discoverPlans').innerText = translations[language].discoverPlans;
    document.getElementById('aboutUsTitle').innerText = translations[language].aboutUsTitle;
    document.getElementById('whoWeAre').innerText = translations[language].whoWeAre;
    document.getElementById('whoWeAreDescription').innerText = translations[language].whoWeAreDescription;
    document.getElementById('visionAndObjective').innerText = translations[language].visionAndObjective;
    document.getElementById('mission').innerText = translations[language].mission;
    document.getElementById('missionDescription').innerText = translations[language].missionDescription;
    document.getElementById('objective').innerText = translations[language].objective;
    document.getElementById('objectiveDescription').innerText = translations[language].objectiveDescription;
    document.getElementById('joinTitle').innerText = translations[language].joinTitle;
    document.getElementById('testPlan').innerText = translations[language].testPlan;
    document.getElementById('testPlanDescription').innerText = translations[language].testPlanDescription;
    document.getElementById('subscribe').innerText = translations[language].subscribe;
    document.getElementById('monthlyPlan').innerText = translations[language].monthlyPlan;
    document.getElementById('monthlyPlanDescription').innerText = translations[language].monthlyPlanDescription;
    document.getElementById('annualPlan').innerText = translations[language].annualPlan;
    document.getElementById('annualPlanDescription').innerText = translations[language].annualPlanDescription;
    document.getElementById('videosTitle').innerText = translations[language].videosTitle;
    document.getElementById('aboutTeam').innerText = translations[language].aboutTeam;
    document.getElementById('aboutProduct').innerText = translations[language].aboutProduct;
    document.getElementById('testimonialsTitle').innerText = translations[language].testimonialsTitle;
    document.getElementById('testimonial1').innerText = translations[language].testimonial1;
    document.getElementById('user1').innerText = translations[language].user1;
    document.getElementById('testimonial2').innerText = translations[language].testimonial2;
    document.getElementById('user2').innerText = translations[language].user2;
    document.getElementById('testimonial3').innerText = translations[language].testimonial3;
    document.getElementById('user3').innerText = translations[language].user3;
    document.getElementById('contactUsTitle').innerText = translations[language].contactUsTitle;
    document.getElementById('contactUsDescription').innerText = translations[language].contactUsDescription;
    document.getElementById('name').innerText = translations[language].name;
    document.getElementById('email').innerText = translations[language].email;
    document.getElementById('phone').innerText = translations[language].phone;
    document.getElementById('address').innerText = translations[language].address;
    document.getElementById('content').innerText = translations[language].content;
    document.getElementById('send').innerText = translations[language].send;
    document.getElementById('labelNombre').textContent = translations[lang].labelNombre;
    document.getElementById('labelCorreo').textContent = translations[lang].labelCorreo;
    document.getElementById('labelTelefono').textContent = translations[lang].labelTelefono;
    document.getElementById('labelDireccion').textContent = translations[lang].labelDireccion;
    document.getElementById('labelContenido').textContent = translations[lang].labelContenido;
    document.getElementById('btnEnviar').textContent = translations[lang].btnEnviar;
}

document.getElementById('languageButton').addEventListener('click', () => {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    document.documentElement.lang = newLanguage;
    changeLanguage(newLanguage);
});
