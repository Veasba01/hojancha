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
    {
        id: 1,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta1.png",
        question: "¿Cuántos distritos conforman el cantón de Hojancha?",
        options: ["3", "5", "4", "6"],
        correct: 1,
        fact: "El cantón de Hojancha está conformado por 5 distritos: Hojancha, Monte Romo, Huacas, Matambú y Puerto Carrillo."
    },
    {
        id: 2,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta2.jpg",
        question: "¿Qué se celebra con orgullo en Hojancha el 1° de mayo, además del Día del Trabajador?",
        options: ["El festival del café", "El desfile de boyeros, considerado uno de los más hermosos del país", "El día del agricultor", "La feria del maíz"],
        correct: 1,
        fact: "El desfile de boyeros del 1° de mayo en Hojancha es considerado uno de los más hermosos del país y representa la tradición campesina."
    },
    {
        id: 3,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta3.jpg",
        question: "¿Qué representa el desfile de boyeros para la comunidad de Hojancha?",
        options: ["Una tradición heredada del Valle Central", "Un símbolo de identidad campesina, trabajo y orgullo rural", "Un evento turístico sin relación con el cantón", "Una competencia nacional de bueyes"],
        correct: 1,
        fact: "El desfile de boyeros es un símbolo profundo de la identidad campesina, el trabajo arduo y el orgullo rural de Hojancha."
    },
    {
        id: 4,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta4.jpg",
        question: "¿Qué actividad económica ha sido históricamente importante en Hojancha?",
        options: ["Minería", "Agricultura", "Pesca comercial", "Industria textil"],
        correct: 1,
        fact: "La agricultura ha sido la base económica de Hojancha por generaciones, siendo una zona eminentemente rural y agrícola."
    },
    {
        id: 5,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta5.jpg",
        question: "¿Cuál es el distrito cabecera del cantón de Hojancha?",
        options: ["Monte Romo", "Puerto Carrillo", "Matambú", "Hojancha"],
        correct: 3,
        fact: "El distrito cabecera del cantón es Hojancha, donde se encuentra la sede de la municipalidad y los servicios principales."
    },
    {
        id: 6,
        district: "Monte Romo",
        image: "/assets/img/hojancha/juego/pregunta6.png",
        question: "¿Cuál de los siguientes describe mejor a Monte Romo?",
        options: ["Distrito costero", "Distrito indígena", "Zona montañosa y rural", "Zona industrial"],
        correct: 2,
        fact: "Monte Romo es conocido por su paisaje montañoso y rural, con hermosas vistas panorámicas y actividades agropecuarias."
    },
    {
        id: 7,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta7.png",
        question: "¿Cuál de estas actividades es común en Hojancha para celebrar el día de San José, patrono del cantón?",
        options: ["Misa solemne, procesión y subasta a beneficio de la parroquia", "Festival de la luz", "Competencia de ciclismo", "Carrera de atletismo entre barrios"],
        correct: 0,
        fact: "El 19 de marzo, día de San José, se celebra con misa solemne, procesión y subasta a beneficio de la parroquia como tradición religiosa del cantón."
    },
    {
        id: 8,
        district: "Matambú",
        image: "/assets/img/hojancha/juego/pregunta8.jpg",
        question: "¿Cuál de las siguientes manifestaciones culturales es representativa del distrito indígena de Matambú?",
        options: ["Bailes africanos", "Cerámica artesanal chorotega", "Máscaras boruca", "Pinturas rupestres"],
        correct: 1,
        fact: "La cerámica artesanal chorotega es una tradición viva en Matambú, manteniendo técnicas ancestrales de los pueblos originarios."
    },
    {
        id: 9,
        district: "Matambú",
        image: "/assets/img/hojancha/juego/pregunta9.jpg",
        question: "¿Qué expresión artística se conserva como parte de la herencia chorotega en Matambú?",
        options: ["Pintura mural", "Tejido con palma", "Escultura en piedra", "Elaboración de figuras en barro"],
        correct: 3,
        fact: "La elaboración de figuras en barro es parte fundamental de la herencia chorotega que se mantiene viva en Matambú."
    },
    {
        id: 10,
        district: "Matambú",
        image: "/assets/img/hojancha/juego/pregunta10.jpg",
        question: "¿Qué elemento natural es considerado sagrado por la cultura chorotega en zonas como Matambú?",
        options: ["El mar", "Los volcanes", "Los ríos y montañas", "Las cavernas"],
        correct: 2,
        fact: "Para la cultura chorotega, los ríos y montañas son elementos sagrados que forman parte integral de su cosmovisión ancestral."
    },
    {
        id: 11,
        district: "Monte Romo/Huacas",
        image: "/assets/img/hojancha/juego/pregunta11.jpg",
        question: "¿Qué tipo de gastronomía tradicional se puede encontrar en festividades de Monte Romo o Huacas?",
        options: ["Comida afrocaribeña", "Asados argentinos", "Platillos a base de maíz y cerdo", "Pescados crudos estilo japonés"],
        correct: 2,
        fact: "Los platillos tradicionales a base de maíz y cerdo son fundamentales en la gastronomía rural de Monte Romo y Huacas."
    },
    {
        id: 12,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta12.jpg",
        question: "¿Qué instrumento tradicional suele acompañar las actividades culturales en Guanacaste, incluyendo Hojancha?",
        options: ["Violín", "Marimba", "Acordeón", "Flauta traversa"],
        correct: 1,
        fact: "La marimba es el instrumento tradicional por excelencia de Guanacaste, presente en todas las celebraciones culturales de Hojancha."
    },
    {
        id: 13,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta13.jpg",
        question: "¿Qué día se celebra el Día del Agricultor en Costa Rica, de gran relevancia para zonas rurales como Monte Romo?",
        options: ["15 de mayo", "4 de octubre", "3 de agosto", "10 de septiembre"],
        correct: 0,
        fact: "El 15 de mayo se celebra el Día del Agricultor en Costa Rica, fecha muy importante para comunidades rurales como Monte Romo."
    },
    {
        id: 14,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta14.png",
        question: "¿Qué se celebra el 19 de marzo en comunidades como Hojancha?",
        options: ["Día del Agricultor", "Día de San José, patrono de la Iglesia", "Día de la Marimba", "Día de la Independencia"],
        correct: 1,
        fact: "El 19 de marzo se celebra el Día de San José, patrono de la Iglesia y del cantón de Hojancha."
    },
    {
        id: 15,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta15.png",
        question: "¿Qué actividad tradicional se realiza en Hojancha el 1º de mayo para conmemorar el Día del Trabajador?",
        options: ["Desfile de antorchas", "Festival de la Madera", "Desfile de boyeros con carretas típicas", "Montadera de toros"],
        correct: 2,
        fact: "El desfile de boyeros con carretas típicas es la tradición más importante del 1º de mayo en Hojancha, celebrando el trabajo rural."
    },
    {
        id: 16,
        district: "Puerto Carrillo",
        image: "/assets/img/hojancha/juego/pregunta16.png",
        question: "¿Qué tipo de turismo es más importante en Puerto Carrillo?",
        options: ["Ecoturismo en montaña", "Turismo arqueológico", "Turismo de playa", "Turismo religioso"],
        correct: 2,
        fact: "Puerto Carrillo es famoso por su turismo de playa, con hermosas costas del Pacífico que atraen visitantes nacionales e internacionales."
    },
    {
        id: 17,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta17.png",
        question: "¿Quién fue Luis Vara Carro dentro del desarrollo del cantón de Hojancha?",
        options: ["Un escultor indígena", "Primer alcalde electo", "Uno de los impulsores para que Hojancha se convirtiera en cantón", "Fundador de la escuela de Puerto Carrillo"],
        correct: 2,
        fact: "Luis Vara Carro fue una figura clave como impulsor para que Hojancha obtuviera el estatus de cantón."
    },
    {
        id: 18,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta18.png",
        question: "¿Por qué es recordada la maestra Alice Víquez Barrantes en Hojancha?",
        options: ["Por ser alcaldesa del cantón", "Por enseñar con dedicación a varias generaciones", "Por ser poeta y escritora", "Por fundar el hospital local"],
        correct: 1,
        fact: "La maestra Alice Víquez Barrantes es recordada con cariño por su dedicación a la enseñanza y por educar a varias generaciones de hojancheños."
    },
    {
        id: 19,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta19.jpg",
        question: "¿Qué logro obtuvo Fabiana Granados Herrera en 2013?",
        options: ["Ganó el Premio Nacional de Cultura", "Fue electa Miss Costa Rica y clasificó en Miss Universo", "Fue la primera alcaldesa de Hojancha", "Fundó la Escuela Victoriano Mena Mena"],
        correct: 1,
        fact: "Fabiana Granados Herrera, oriunda de Hojancha, fue Miss Costa Rica 2013 y clasificó en Miss Universo, llevando el nombre del cantón al mundo."
    },
    {
        id: 20,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta20.jpg",
        question: "¿Qué cargo ocupó Ángel Marín Madrigal en 1974?",
        options: ["Gobernador de Guanacaste", "Presidente del primer Concejo Municipal de Hojancha", "Director de la Escuela Victoriano Mena Mena", "Fundador del Ebais local"],
        correct: 1,
        fact: "Ángel Marín Madrigal fue el primer presidente del Concejo Municipal de Hojancha en 1974, cuando el cantón obtuvo su estatus oficial."
    },
    {
        id: 21,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta21.png",
        question: "¿Qué rol desempeñó Diego Barrantes Gamboa en Hojancha?",
        options: ["Primer alcalde del cantón", "Primer Ejecutivo Municipal de Hojancha", "Fundador del primer periódico local", "Director del hospital cantonal"],
        correct: 1,
        fact: "Diego Barrantes Gamboa tuvo el honor de ser el primer Ejecutivo Municipal de Hojancha, iniciando la administración local del cantón."
    },
    {
        id: 22,
        district: "General",
        image: "/assets/img/hojancha/juego/pregunta22.png",
        question: "¿Por qué es significativo el nombre Victoriano Mena Mena en Hojancha?",
        options: ["Fue el primer médico del cantón", "Fue un educador destacado y la escuela local lleva su nombre", "Fundó la primera iglesia del cantón", "Fue un reconocido poeta local"],
        correct: 1,
        fact: "Victoriano Mena Mena fue un educador destacado cuyo legado perdura en la Escuela que lleva su nombre, formando parte importante de la historia educativa de Hojancha."
    }
];