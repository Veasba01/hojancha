import { IBlog } from "@/types/blog-d-t";

export const home_blog_data: IBlog[] = [
  {
    id: 1,
    date: "April 10, 2024",
    title: "Weighing the pros and cons of each choice.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/01.jpg",
    authorImg: "/assets/img/blog/01.png",
    authorName: "Jane Cooper",
    readTime: "4 Min Read",
  },
  {
    id: 2,
    date: "April 16, 2024",
    title: "We'll delve into the art of seamless hotel booking.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/03.jpg",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Cody Fisher",
    readTime: "7 Min Read",
  },
  {
    id: 3,
    date: "April 18, 2024",
    title: "Identifying your travel goals and preferences.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/02.jpg",
    authorImg: "/assets/img/blog/03.png",
    authorName: "Devon Lane",
    readTime: "4 Min Read",
  },
];


export const blog_grid_data: IBlog[] = [
  ...home_blog_data,
  {
    id: 4,
    date: "May 05, 2024",
    title: "Weighing the pros and cons of each choice.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/01.jpg",
    authorImg: "/assets/img/blog/01.png",
    authorName: "Jane Cooper",
    readTime: "4 Min Read",
  },
  {
    id: 5,
    date: "June 10, 2024",
    title: "We'll delve into the art of seamless hotel booking.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/03.jpg",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Cody Fisher",
    readTime: "7 Min Read",
  },
  {
    id: 6,
    date: "April 20, 2024",
    title: "Identifying your travel goals and preferences.",
    description:
      "Navigating the world of hotel booking is a crucial aspect of ensuring.",
    imgSrc: "/assets/img/blog/02.jpg",
    authorImg: "/assets/img/blog/03.png",
    authorName: "Devon Lane",
    readTime: "4 Min Read",
  },
];


export const blog_postbox_data: IBlog[] = [
  {
    id: 7,
    date: "November 07, 2024",
    title: "Distrito de Hojancha, Guanacaste.",
    description:
      "Hojancha es un distrito y cantón de la provincia de Guanacaste, Costa Rica. Se encuentra ubicado en la región norte del país y es conocido por su belleza natural y su rica cultura. El cantón de Hojancha es famoso por su producción de café, así como por sus paisajes montañosos y su biodiversidad. La zona es hogar de diversas especies de flora y fauna, lo que la convierte en un destino popular para los amantes de la naturaleza y el ecoturismo.",
    imgSrc: "/assets/img/hojancha/hojancha.webp",
    authorImg: "/assets/img/blog/blog-sidebar/user.png",
    authorName: "Jane Cooper",
    readTime: "4 Min Read",
  },
  {
    id: 8,
    date: "December 11, 2024",
    title: "Distrito de Monte Romo, Guanacaste.",
    description:
      "Monte Romo es un distrito y cantón de la provincia de Guanacaste, Costa Rica. Se encuentra ubicado en la región norte del país y es conocido por su belleza natural y su rica cultura. El cantón de Monte Romo es famoso por su producción de café, así como por sus paisajes montañosos y su biodiversidad. La zona es hogar de diversas especies de flora y fauna, lo que la convierte en un destino popular para los amantes de la naturaleza y el ecoturismo.",
    imgSrc: "/assets/img/hojancha/monte_romo.webp",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Vera Parker",
    readTime: "5 Min Read",
  },
  {
    id: 9,
    date: "December 15, 2024",
    title: "Distrito de Huacas, Guanacaste.",
    description:
      "Huacas es un distrito y cantón de la provincia de Guanacaste, Costa Rica. Se encuentra ubicado en la región norte del país y es conocido por su belleza natural y su rica cultura. El cantón de Huacas es famoso por su producción de café, así como por sus paisajes montañosos y su biodiversidad. La zona es hogar de diversas especies de flora y fauna, lo que la convierte en un destino popular para los amantes de la naturaleza y el ecoturismo.",
    imgSrc: "/assets/img/hojancha/huacas.webp",
    authorImg: "/assets/img/blog/03.png",
    authorName: "Alexander Smith",
    readTime: "6 Min Read",
  },
  {
    id: 10,
    date: "December 20, 2024",
    title: "Distrito de Matambú, Guanacaste.",
    description:
      "Matambú es un distrito y cantón de la provincia de Guanacaste, Costa Rica. Se encuentra ubicado en la región norte del país y es conocido por su belleza natural y su rica cultura. El cantón de Matambú es famoso por su producción de café, así como por sus paisajes montañosos y su biodiversidad. La zona es hogar de diversas especies de flora y fauna, lo que la convierte en un destino popular para los amantes de la naturaleza y el ecoturismo.",
    imgSrc: "/assets/img/hojancha/matambu.webp",
    authorImg: "/assets/img/blog/blog-sidebar/user.png",
    authorName: "Brandon Scott",
    readTime: "7 Min Read",
  },
  {
    id: 11,
    date: "December 25, 2024",
    title: "Distrito de Puerto Carrillo, Guanacaste.",
    description:
      "Puerto Carrillo es un distrito y cantón de la provincia de Guanacaste, Costa Rica. Se encuentra ubicado en la región norte del país y es conocido por su belleza natural y su rica cultura. El cantón de Puerto Carrillo es famoso por su producción de café, así como por sus paisajes montañosos y su biodiversidad. La zona es hogar de diversas especies de flora y fauna, lo que la convierte en un destino popular para los amantes de la naturaleza y el ecoturismo.",
    imgSrc: "/assets/img/hojancha/puertocarrillo.webp",
    authorImg: "/assets/img/blog/02.png",
    authorName: "Sophia Brown",
    readTime: "8 Min Read",
  },
]


export const all_blogs = [
  ...home_blog_data,
  ...blog_grid_data,
  ...blog_postbox_data
]