import Image from "next/image";
import shape from "@/assets/img/adventures/shape.png";
import man_img from "@/assets/img/adventures/man.png";
import woman_img from "@/assets/img/adventures/woman.png";
import rest_img from "@/assets/img/adventures/rest.png";
import rain_box from '@/assets/img/adventures/rainbox.png';
import adventures_1 from '@/assets/img/adventures/01.png';
import adventures_2 from '@/assets/img/adventures/02.png';
import adventures_3 from '@/assets/img/adventures/03.png';
import { AdventureHolidayOne, AdventureHolidayThree, AdventureHolidayTwo } from "../svg";


const adventureData = [
    {
        id: 1,
        iconSrc: adventures_1,
        iconSvg: <AdventureHolidayOne />,
        label: "Explora",
        title: "Hojancha<br /> Central",
    },
    {
        id: 2,
        iconSrc: adventures_2,
        iconSvg: <AdventureHolidayTwo />,
        label: "Descubre",
        title: "Monte Romo<br /> & Huacas",
    },
    {
        id: 3,
        iconSrc: adventures_3,
        iconSvg: <AdventureHolidayThree />,
        label: "Visita",
        title: "Matambú &<br /> P. Carrillo",
    },
];
export default function AdventuresArea() {
    return (
        <div className="tp-adventures-area fix pt-120 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6 col-md-8 mb-30">
                        <div className="tp-adventures-thumb p-relative wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1s">
                            <Image className="w-100" src={shape} alt="shape" style={{height:'auto'}} />
                            <div className="tp-hero-birds-animetion">
                                <svg className="tp-hero-birds">
                                    <g className="svg-width">
                                        <path className="wings" d="M 5 10 Q 25 5 50 15 L 50 25 Q 25 10 5 10 M 95 10 Q 75 5 50 15 L 50 25 Q 75 10 95 10" />
                                    </g>
                                </svg>
                                <svg className="tp-hero-birds-2">
                                    <g>
                                        <path className="wings" d="M 5 10 Q 25 5 50 15 L 50 25 Q 25 10 5 10 M 95 10 Q 75 5 50 15 L 50 25 Q 75 10 95 10" />
                                    </g>
                                </svg>
                                <svg className="tp-hero-birds-3">
                                    <g>
                                        <path className="wings" d="M 5 10 Q 25 5 50 15 L 50 25 Q 25 10 5 10 M 95 10 Q 75 5 50 15 L 50 25 Q 75 10 95 10" />
                                    </g>
                                </svg>
                            </div>
                            <div className="tp-adventures-shape tpswings">
                                <Image src={man_img} alt="man-img" style={{height:'auto'}} />
                            </div>
                            <div className="tp-adventures-shape-2">
                                <Image src={woman_img} alt="woman-img" style={{height:'auto'}} />
                            </div>
                            <div className="tp-adventures-shape-3" data-parallax='{"x": 30, "smoothness": 100}'>
                                <Image src={rest_img} alt="rest-img" style={{height:'auto'}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 mb-30 wow fadeInLeft" data-wow-delay=".4s" data-wow-duration="1s">                        <div className="tp-adventures-title-wrap mb-55 mr-65">
                            <h5 className="tp-section-title-two-pre mb-10">Conecta con la Naturaleza</h5>
                            <h2 className="tp-section-title-two fs-40 lh-115 mb-20">¿Qué Distrito de{" "}
                                <Image src={rain_box} alt="rainbox" />
                                <br />
                                Hojancha Quieres Explorar?</h2>
                            <p className="tp-adventures-para">Hojancha te ofrece una experiencia única en Costa Rica desde 1848. Con más de <b>175 años</b> de historia, nuestros 5 distritos albergan una rica biodiversidad y tradiciones cafetaleras auténticas.</p>
                        </div>
                        <div className="row">

                            {adventureData.map((adventure) => (
                                <div className="col-sm-4 mb-25" key={adventure.id}>
                                    <div className="tp-adventures-box">
                                        <span className="tp-adventures-box-icon p-relative mb-40">
                                            <Image src={adventure.iconSrc} alt="icon" />
                                            {adventure.iconSvg}
                                        </span>
                                        <div className="tp-adventures-content">
                                            <span>{adventure.label}</span>
                                            <h4 dangerouslySetInnerHTML={{ __html: adventure.title }}/>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
