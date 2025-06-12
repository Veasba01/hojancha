// Información de personas importantes extraída de las preguntas del juego
export interface ImportantPerson {
    id: number;
    name: string;
    image: string;
    role: string;
    description: string;
    district?: string;
    year?: string;
}

export const importantPeople: ImportantPerson[] = [
    {
        id: 1,
        name: "Doña Isabel Araya de Durán",
        image: "/assets/img/hojancha/personas/IsabelAraya.jpg",
        role: "Madre Ejemplar y Referente Comunitario",
        description: "Destacada vecina de Hojancha reconocida por su templanza, fe y constante entrega al bienestar de su familia y comunidad. Madre del doctor Fredy Durán, es recordada por su hospitalidad y compromiso con las tradiciones de su tierra.",
    },
    {
        id: 2,
        name: "Doña Carmen Víquez Barrantes",
        image: "/assets/img/hojancha/personas/CarmenViquez.jpg",
        role: "Devota y Servidora Comunitaria",
        description: "Mujer ejemplar, profundamente devota y generosa. Rezadora consagrada, servidora incansable de la Iglesia y dama voluntaria de la Cruz Roja. Su entrega constante y fe inquebrantable la convirtieron en un verdadero pilar de Hojancha.",
    },
    {
        id: 3,
        name: "Monseñor Víctor Hugo Castillo Matarrita",
        image: "/assets/img/hojancha/personas/VictorHugo.jpg",
        role: "Obispo Misionero Comboniano",
        description: "Oriundo de Hojancha, misionero comboniano nombrado obispo de la Diócesis de Kaga-Bandoro en República Centroafricana. Reconocido por su cercanía con la gente, vida sencilla y compromiso con la justicia y la paz.",
    },
    {
        id: 4,
        name: "José Ángel Díaz Vásquez",
        image: "/assets/img/hojancha/personas/JoseAngelDiaz.jpg",
        role: "Educador, Músico y Líder Comunal",
        description: "Nacido en 1942, educador, músico y deportista que dejó huella profunda en Hojancha. Impulsor del desarrollo comunal, fundador de grupos musicales y Sabrosa Disco Móvil. Recibió el Premio Mauro Fernández en 1987.",
        year: "1942-"
    },
    {
        id: 5,
        name: "Noldan Venegas Pérez",
        image: "/assets/img/hojancha/personas/NodalVenegas.jpg",
        role: "Animador Cultural y Vecino Querido",
        description: "Personaje muy querido en la comunidad hojancheña, conocido por su carisma, alegría contagiosa y entrega a las causas comunales y culturales. Su espontaneidad y sentido del humor lo han convertido en una figura entrañable.",
    },
    {
        id: 6,
        name: "Manuel Pineda",
        image: "/assets/img/hojancha/personas/ManuelPineda.jpg",
        role: "Trabajador Ejemplar",
        description: "Hombre ejemplar apreciado por su humildad, constancia en el trabajo y actitud positiva. Referente silencioso que construye comunidad con el ejemplo diario, siempre dispuesto a tender la mano y compartir.",
    },
    {
        id: 7,
        name: "Doña Polita Alemán",
        image: "/assets/img/hojancha/personas/PolitaAleman.jpg",
        role: "Mujer Noble y Generosa",
        description: "Mujer querida y respetada por su nobleza, calidez humana y espíritu generoso. Su casa ha sido por años un espacio de acogida y cariño, construyendo un legado basado en el respeto, la fe y la unión familiar.",
    },
    {
        id: 8,
        name: "Margarita Villalobos Villalobos",
        image: "/assets/img/hojancha/personas/MargaritaVillalobos.jpg",
        role: "Reina de los Boyeros y Alegría del Pueblo",
        description: "Nacida en Monte Romo en 1952, conocida como 'Mangarita'. Mujer ejemplar de carácter alegre y trabajador. Reina de los Boyeros, reconocida por su amor al baile, energía contagiosa y capacidad de alegrar cualquier reunión.",
        year: "1952",
        district: "Monte Romo"
    },
    {
        id: 9,
        name: "Alice Víquez Barrantes",
        image: "/assets/img/hojancha/personas/AliceViquez.jpg",
        role: "Maestra Pionera",
        description: "Nacida en 1937 cerca del río Nosara. Parte de la primera generación en completar primaria en Hojancha (1950). Maestra por 25 años en la Escuela Nosara, regidora y colaboradora activa en la vida cívica y religiosa del cantón.",
        year: "1937"
    },
    {
        id: 10,
        name: "Fabiana Granados Herrera",
        image: "/assets/img/hojancha/personas/FabianaGranados.jpg",
        role: "Miss Costa Rica 2013",
        description: "Nacida el 8 de marzo de 1990 en Hojancha. Miss Costa Rica 2013 y primera mujer guanacasteca en llegar a semifinales de Miss Universo. Promueve proyectos sociales en educación infantil y emprendimiento en Guanacaste.",
        year: "1990"
    },    {
        id: 11,
        name: "Óscar 'Macho' Ramírez Hernández",
        image: "/assets/img/hojancha/personas/OscarRamirez.jpg",
        role: "Entrenador Nacional y Agricultor",
        description: "Nacido en 1964, exfutbolista y entrenador. Cinco títulos con Alajuelense, seleccionador nacional en Rusia 2018. Vive en su finca en Hojancha dedicado a la agricultura de cítricos y ganadería, siendo un vecino humilde y trabajador.",
        year: "1964"
    },
    {
        id: 12,
        name: "Padre Luis Vara Carro",
        image: "/assets/img/hojancha/personas/LuisVara.jpg",
        role: "Sacerdote y Impulsor del Cantonato",
        description: "Nacido en Litos, España. Sacerdote y líder comunitario que dedicó más de 60 años al desarrollo de Hojancha. Impulsor fundamental del cantonato en 1971, promovió cooperativas, educación y desarrollo social. Falleció en 2018 a los 92 años.",
        year: "1926-2018"
    }
];
