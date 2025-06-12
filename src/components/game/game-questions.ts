// Imágenes locales del juego de Hojancha
const hojanchaImages = {
    hojancha: "/assets/img/hojancha/juego/Hojancha.jpg",
    agricultura: "/assets/img/hojancha/juego/Agricultura.jpg",
    agricultor: "/assets/img/hojancha/juego/Agricultor.jpg",
    monteRomo: "/assets/img/hojancha/juego/MonteRomo.jpg",
    ceramicasChorotega: "/assets/img/hojancha/juego/CerámicasChorotega.jpg",
    figurasBarro: "/assets/img/hojancha/juego/FiguraBarro.jpg",
    marimba: "/assets/img/hojancha/juego/marimba1.jpg",
    maiz: "/assets/img/hojancha/juego/Maíz.jpg",
    fabianaGranados: "/assets/img/hojancha/juego/FabinaGranados.jpg",
    rios: "/assets/img/hojancha/juego/Riós.jpg"
};

export interface GameQuestion {
    id: number;
    district: string;
    image: string;
    question: string;
    options: string[];
    correct: number;
    fact: string;
}

export const gameData: GameQuestion[] = [
    // Preguntas originales
    {
        id: 1,
        district: "Puerto Carrillo",
        image: "/assets/img/gellary/hojancha/Puerto Carrillo editada (1).png",
        question: "¿Cuál es la principal atracción de Puerto Carrillo?",
        options: ["Montañas", "Playa", "Café", "Volcanes"],
        correct: 1,
        fact: "Puerto Carrillo es famoso por sus hermosas playas en el Pacífico costarricense."
    },
    {
        id: 2,
        district: "Monte Romo",
        image: "/assets/img/gellary/hojancha/DMonte Romo Modificado (1).png",
        question: "¿Qué caracteriza principalmente a Monte Romo?",
        options: ["Playas", "Paisajes montañosos", "Ríos", "Desiertos"],
        correct: 1,
        fact: "Monte Romo se destaca por sus impresionantes paisajes montañosos y vistas panorámicas."
    },
    {
        id: 3,
        district: "Matambú",
        image: "/assets/img/gellary/hojancha/Matambu 3-2-3 (1).jpg",
        question: "¿Cuántos distritos tiene el cantón de Hojancha?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        fact: "Hojancha tiene 5 distritos: Hojancha Central, Monte Romo, Huacas, Matambú y Puerto Carrillo."
    },
    {
        id: 4,
        district: "Hojancha Central",
        image: "/assets/img/gellary/hojancha/img_20171027_153533.jpg",
        question: "¿En qué año fue fundado Hojancha?",
        options: ["1840", "1848", "1855", "1860"],
        correct: 1,
        fact: "Hojancha fue fundado en 1848, con más de 175 años de historia costarricense."
    },
    // Nuevas preguntas con imágenes actualizadas
    {
        id: 5,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Cuántos distritos conforman el cantón de Hojancha?",
        options: ["3", "5", "4", "6"],
        correct: 1,
        fact: "El cantón de Hojancha está conformado por 5 distritos."
    },
    {
        id: 6,
        district: "General",
        image: hojanchaImages.agricultura,
        question: "¿Qué actividad económica ha sido históricamente importante en Hojancha?",
        options: ["Minería", "Agricultura", "Pesca comercial", "Industria textil"],
        correct: 1,
        fact: "La agricultura ha sido la base económica de Hojancha por generaciones."
    },
    {
        id: 7,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Cuál es el distrito cabecera del cantón de Hojancha?",
        options: ["Monte Romo", "Puerto Carrillo", "Matambú", "Hojancha"],
        correct: 3,
        fact: "El distrito cabecera es Hojancha."
    },
    {
        id: 8,
        district: "Monte Romo",
        image: hojanchaImages.monteRomo,
        question: "¿Cuál de los siguientes describe mejor a Monte Romo?",
        options: ["Distrito costero", "Distrito indígena", "Zona montañosa y rural", "Zona industrial"],
        correct: 2,
        fact: "Monte Romo es conocido por su paisaje montañoso y rural."
    },
    {
        id: 9,
        district: "Matambú",
        image: hojanchaImages.ceramicasChorotega,
        question: "¿Cuál de las siguientes manifestaciones culturales es representativa del distrito indígena de Matambú?",
        options: ["Bailes africanos", "Cerámica artesanal chorotega", "Máscaras boruca", "Pinturas rupestres"],
        correct: 1,
        fact: "La cerámica chorotega es una tradición viva en Matambú."
    },
    {
        id: 10,
        district: "Matambú",
        image: hojanchaImages.figurasBarro,
        question: "¿Qué expresión artística se conserva como parte de la herencia chorotega en Matambú?",
        options: ["Pintura mural", "Tejido con palma", "Escultura en piedra", "Elaboración de figuras en barro"],
        correct: 3,
        fact: "La elaboración de figuras en barro es parte de la herencia chorotega."
    },
    {
        id: 11,
        district: "Matambú",
        image: hojanchaImages.rios,
        question: "¿Qué elemento natural es considerado sagrado por la cultura chorotega en zonas como Matambú?",
        options: ["El mar", "Los volcanes", "Los ríos y montañas", "Las cavernas"],
        correct: 2,
        fact: "Los ríos y montañas son elementos sagrados para la cultura chorotega."
    },
    {
        id: 12,
        district: "Monte Romo/Huacas",
        image: hojanchaImages.maiz,
        question: "¿Qué tipo de gastronomía tradicional se puede encontrar en festividades de Monte Romo o Huacas?",
        options: ["Comida afrocaribeña", "Asados argentinos", "Platillos a base de maíz y cerdo", "Pescados crudos estilo japonés"],
        correct: 2,
        fact: "El maíz y el cerdo son ingredientes clave en la gastronomía local."
    },
    {
        id: 13,
        district: "General",
        image: hojanchaImages.marimba,
        question: "¿Qué instrumento tradicional suele acompañar las actividades culturales en Guanacaste, incluyendo Hojancha?",
        options: ["Violín", "Marimba", "Acordeón", "Flauta traversa"],
        correct: 1,
        fact: "La marimba es el instrumento tradicional de Guanacaste."
    },
    {
        id: 14,
        district: "General",
        image: hojanchaImages.agricultor,
        question: "¿Qué día se celebra el Día del Agricultor en Costa Rica, de gran relevancia para zonas rurales como Monte Romo?",
        options: ["15 de mayo", "4 de octubre", "3 de agosto", "10 de septiembre"],
        correct: 0,
        fact: "El 15 de mayo se celebra el Día del Agricultor en Costa Rica."
    },
    {
        id: 15,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Qué se celebra el 19 de marzo en comunidades como Hojancha?",
        options: ["Día del Agricultor", "Día de San José, patrono de la Iglesia", "Día de la Marimba", "Día de la Independencia"],
        correct: 1,
        fact: "El 19 de marzo se celebra el Día de San José, patrono de la Iglesia."
    },
    {
        id: 16,
        district: "General",
        image: hojanchaImages.agricultura,
        question: "¿Qué actividad tradicional se realiza en Hojancha el 1º de mayo para conmemorar el Día del Trabajador?",
        options: ["Desfile de antorchas", "Festival de la Madera", "Desfile de boyeros con carretas típicas", "Montadera de toros"],
        correct: 2,
        fact: "El desfile de boyeros es una tradición del 1º de mayo en Hojancha."
    },
    {
        id: 17,
        district: "Puerto Carrillo",
        image: hojanchaImages.rios,
        question: "¿Qué tipo de turismo es más importante en Puerto Carrillo?",
        options: ["Ecoturismo en montaña", "Turismo arqueológico", "Turismo de playa", "Turismo religioso"],
        correct: 2,
        fact: "Puerto Carrillo es famoso por su turismo de playa."
    },
    {
        id: 18,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Quién fue Luis Vara Carro dentro del desarrollo del cantón de Hojancha?",
        options: ["Un escultor indígena", "Primer alcalde electo", "Uno de los impulsores para que Hojancha se convirtiera en cantón", "Fundador de la escuela de Puerto Carrillo"],
        correct: 2,
        fact: "Luis Vara Carro fue uno de los impulsores para que Hojancha fuera cantón."
    },
    {
        id: 19,
        district: "General",
        image: hojanchaImages.agricultor,
        question: "¿Por qué es recordado Francisco Chico Quesada en Hojancha?",
        options: ["Por ser poeta y músico", "Por ser un líder indígena", "Por ser un campesino símbolo de humildad y trabajo", "Por ser el primer alcalde del cantón"],
        correct: 2,
        fact: "Francisco Chico Quesada es símbolo de humildad y trabajo en Hojancha."
    },
    {
        id: 20,
        district: "Monte Romo",
        image: hojanchaImages.agricultura,
        question: "¿Qué actividad se asocia con Don Pablo Sibaja en las historias de Monte Romo?",
        options: ["La pesca", "El pastoreo de caballos", "La boyeada tradicional con carretas", "La minería artesanal"],
        correct: 2,
        fact: "Don Pablo Sibaja es recordado por la boyeada tradicional con carretas."
    },
    {
        id: 21,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Quién fue conocida por ayudar a nacer a generaciones de hojancheños?",
        options: ["Doña Lucha", "Doña Crucita", "Doña Clara", "Doña Marta"],
        correct: 1,
        fact: "Doña Crucita fue partera y ayudó a nacer a generaciones en Hojancha."
    },
    {
        id: 22,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Por qué es recordada la maestra Alice en Hojancha?",
        options: ["Por ser alcaldesa del cantón", "Por enseñar con dedicación a varias generaciones", "Por ser poeta y escritora", "Por fundar el hospital local"],
        correct: 1,
        fact: "La maestra Alice es recordada por su dedicación a la enseñanza."
    },
    {
        id: 23,
        district: "General",
        image: hojanchaImages.fabianaGranados,
        question: "¿Qué logro obtuvo Fabiana Granados Herrera en 2013?",
        options: ["Ganó el Premio Nacional de Cultura", "Fue electa Miss Costa Rica y clasificó en Miss Universo", "Fue la primera alcaldesa de Hojancha", "Fundó la Escuela Victoriano Mena Mena"],
        correct: 1,
        fact: "Fabiana Granados fue Miss Costa Rica y clasificó en Miss Universo en 2013."
    },
    {
        id: 24,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Qué cargo ocupó Ángel Marín Madrigal en 1974?",
        options: ["Gobernador de Guanacaste", "Presidente del primer Concejo Municipal de Hojancha", "Director de la Escuela Victoriano Mena Mena", "Fundador del Ebais local"],
        correct: 1,
        fact: "Ángel Marín Madrigal fue presidente del primer Concejo Municipal de Hojancha."
    },
    {
        id: 25,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Qué rol desempeñó Diego Barrantes Gamboa en Hojancha?",
        options: ["Primer alcalde del cantón", "Primer Ejecutivo Municipal de Hojancha", "Fundador del primer periódico local", "Director del hospital cantonal"],
        correct: 1,
        fact: "Diego Barrantes Gamboa fue el primer Ejecutivo Municipal de Hojancha."
    },
    {
        id: 26,
        district: "General",
        image: hojanchaImages.hojancha,
        question: "¿Por qué es significativo el nombre Victoriano Mena Mena en Hojancha?",
        options: ["Fue el primer médico del cantón", "Fue un educador destacado y la escuela local lleva su nombre", "Fundó la primera iglesia del cantón", "Fue un reconocido poeta local"],
        correct: 1,
        fact: "Victoriano Mena Mena fue un educador destacado y la escuela lleva su nombre."
    }
];