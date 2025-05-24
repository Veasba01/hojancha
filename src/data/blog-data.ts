import { IBlog } from "@/types/blog-d-t";

export const home_blog_data: IBlog[] = [
  {
    id: 1,
    date: "Enero 15, 2025",
    title: "Descubre los senderos secretos de Monte Romo",
    description:
      "Explora los paisajes montañosos y la biodiversidad única del distrito más elevado de Hojancha.",
    imgSrc: "/assets/img/gellary/hojancha/DMonte Romo Modificado (1).png",
    authorImg: "/assets/img/blog/01.png",
    authorName: "Carlos Ramírez",
    readTime: "6 Min Lectura",
  },
  {
    id: 2,
    date: "Enero 20, 2025",
    title: "Puerto Carrillo: Paraíso costero de Guanacaste",
    description:
      "Descubre las playas vírgenes y la cultura pesquera tradicional de este hermoso distrito costero.",
    imgSrc: "/assets/img/gellary/hojancha/Puerto Carrillo editada (1).png",
    authorImg: "/assets/img/blog/02.png",
    authorName: "María González",
    readTime: "8 Min Lectura",
  },
  {
    id: 3,
    date: "Enero 25, 2025",
    title: "Aventuras cafeteras en Hojancha Central",
    description:
      "Sumérgete en la rica tradición cafetera y conoce los procesos artesanales de nuestro café de altura.",
    imgSrc: "/assets/img/gellary/hojancha/img_20171027_153533.jpg",
    authorImg: "/assets/img/blog/03.png",
    authorName: "José Morales",
    readTime: "5 Min Lectura",
  },
];


export const blog_grid_data: IBlog[] = [
  ...home_blog_data,  {
    id: 4,
    date: "Febrero 01, 2025",
    title: "Huacas: Tesoros arqueológicos y naturales",
    description:
      "Explora los sitios arqueológicos precolombinos y la rica biodiversidad de este fascinante distrito.",
    imgSrc: "/assets/img/gellary/hojancha/145260759_2817059001894825_7664827866168630125_n.jpg",
    authorImg: "/assets/img/blog/01.png",
    authorName: "Ana Vargas",
    readTime: "7 Min Lectura",
  },
  {
    id: 5,
    date: "Febrero 08, 2025",
    title: "Matambú: Ecoturismo y tradición",
    description:
      "Descubre los senderos naturales y las tradiciones ancestrales que definen este hermoso distrito.",
    imgSrc: "/assets/img/gellary/hojancha/Matambu 3-2-3 (1).jpg",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Roberto Jiménez",
    readTime: "6 Min Lectura",
  },  {
    id: 6,
    date: "Febrero 12, 2025",
    title: "Gastronomía típica de Hojancha",
    description:
      "Saborea los platos tradicionales y productos locales que hacen única la cocina hojanchense.",
    imgSrc: "/assets/img/gellary/hojancha/480629388_1080136417462623_1372011887175784832_n.jpg",
    authorImg: "/assets/img/blog/03.png",
    authorName: "Elena Rojas",
    readTime: "4 Min Lectura",
  },
];


export const blog_postbox_data: IBlog[] = [
  {
    id: 7,
    date: "Febrero 15, 2025",
    title: "Historia y patrimonio cultural de Hojancha",
    description:
      "Conoce la rica historia de Hojancha, desde sus orígenes en 1848 hasta convertirse en un cantón próspero con más de 175 años de tradición costarricense. Descubre los acontecimientos históricos, personajes importantes y el desarrollo cultural que han forjado la identidad de nuestros cinco distritos.",
    imgSrc: "/assets/img/gellary/hojancha/img_20171027_153533.jpg",
    authorImg: "/assets/img/blog/blog-sidebar/user.png",
    authorName: "Prof. Manuel Herrera",
    readTime: "10 Min Lectura",
  },
  {
    id: 8,
    date: "Febrero 20, 2025",
    title: "Monte Romo: Montañas, café y vistas panorámicas",
    description:
      "Explore las majestuosas montañas de Monte Romo, donde las plantaciones de café de altura se mezclan con paisajes espectaculares. Descubra los miradores naturales, senderos de montaña y la tradición cafetera que ha definido este distrito por generaciones.",
    imgSrc: "/assets/img/gellary/hojancha/DMonte Romo Modificado (1).png",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Isabella Vargas",
    readTime: "8 Min Lectura",
  },  {
    id: 9,
    date: "Febrero 25, 2025",
    title: "Huacas: Arqueología y biodiversidad única",
    description:
      "Sumérjase en los misterios arqueológicos de Huacas, donde vestigios precolombinos conviven con una biodiversidad excepcional. Explore los senderos naturales, observe la fauna local y descubra los secretos de las antiguas culturas que habitaron estas tierras.",
    imgSrc: "/assets/img/gellary/hojancha/481070915_1080134897462775_8087484325116736247_n.jpg",
    authorImg: "/assets/img/blog/03.png",
    authorName: "Dr. Alejandro Méndez",
    readTime: "9 Min Lectura",
  },
  {
    id: 10,
    date: "Marzo 01, 2025",
    title: "Matambú: Ecoturismo y conservación natural",
    description:
      "Descubra los tesoros naturales de Matambú, un distrito comprometido con la conservación y el ecoturismo sostenible. Explore los bosques protegidos, observe la vida silvestre y participe en programas de conservación que protegen nuestro patrimonio natural para futuras generaciones.",
    imgSrc: "/assets/img/gellary/hojancha/Matambu 3-2-3 (1).jpg",
    authorImg: "/assets/img/blog/blog-sidebar/user.png",
    authorName: "Biólogo Diego Fernández",
    readTime: "7 Min Lectura",
  },
  {
    id: 11,
    date: "Marzo 05, 2025",
    title: "Puerto Carrillo: Playas, pesca y cultura costera",
    description:
      "Descubra la belleza costera de Puerto Carrillo, donde las playas vírgenes del Pacífico se encuentran con una rica tradición pesquera. Conozca las técnicas de pesca artesanal, disfrute de los atardeceres espectaculares y experimente la hospitalidad de la cultura costera guanacasteca.",
    imgSrc: "/assets/img/gellary/hojancha/Puerto Carrillo editada (1).png",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Capitán Sergio Montoya",
    readTime: "6 Min Lectura",
  },
]


export const all_blogs = [
  ...home_blog_data,
  ...blog_grid_data,
  ...blog_postbox_data
]