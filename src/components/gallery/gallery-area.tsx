'use client';
import Image from "next/image";
import { useEffect } from "react";
import { useIsotop } from "@/hooks/use-isotop";
import styles from './gallery-area.module.css';

// Imágenes de Hojancha
import puerto_carrillo from "@/assets/img/gellary/hojancha/Puerto Carrillo editada (1).png";
import matambu from "@/assets/img/gellary/hojancha/Matambu 3-2-3 (1).jpg";
import hojancha_vista from "@/assets/img/gellary/hojancha/img_20171027_153533.jpg";
import monte_romo from "@/assets/img/gellary/hojancha/DMonte Romo Modificado (1).png";
import hojancha_1 from "@/assets/img/gellary/hojancha/481070915_1080134897462775_8087484325116736247_n.jpg";
import hojancha_2 from "@/assets/img/gellary/hojancha/480629388_1080136417462623_1372011887175784832_n.jpg";
import hojancha_3 from "@/assets/img/gellary/hojancha/145260759_2817059001894825_7664827866168630125_n.jpg";

const gallery_data = [
    // Primera fila: 1 large + 1 small
    {
        image: puerto_carrillo,
        title: "Puerto Carrillo",
        description: "Playa paradisíaca en el Pacífico",
        size: "large",
        district: "Puerto Carrillo"
    },
    {
        image: monte_romo,
        title: "Monte Romo",
        description: "Paisajes montañosos únicos",
        size: "small",
        district: "Monte Romo"
    },
    // Segunda fila: 1 small + 1 large
    {
        image: matambu,
        title: "Matambú",
        description: "Belleza natural y tradición",
        size: "small",
        district: "Matambú"
    },
    {
        image: hojancha_vista,
        title: "Vistas de Hojancha",
        description: "Panorámica del cantón",
        size: "large",
        district: "Hojancha Central"
    },
    {
        image: hojancha_1,
        title: "Naturaleza Exuberante",
        description: "Biodiversidad costarricense",
        size: "medium",
        district: "Hojancha"
    },
    // Tercera fila: 2 imágenes medium
    {
        image: hojancha_2,
        title: "Cultura Local",
        description: "Tradiciones de nuestro pueblo",
        size: "medium",
        district: "Hojancha"
    },
    {
        image: hojancha_3,
        title: "Paisajes Únicos",
        description: "La belleza de Guanacaste",
        size: "medium",
        district: "Hojancha"
    }
];

export default function GalleryArea() {
    const { initIsotop, isotopContainer } = useIsotop();

    useEffect(() => {
        initIsotop();
    }, [initIsotop]);
    
    return (
        <div className="tp-gallery-area-start pt-120 pb-95">
            <div className="container">
                {/* Título de la sección */}
                <div className="row">
                    <div className="col-12">
                        <div className="tp-section-title-wrap text-center mb-60">
                            <h2 className="tp-section-title mb-20">Galería de Hojancha</h2>
                            <p className="tp-section-title-desc">Descubre la belleza natural y cultural de nuestros 5 distritos</p>
                        </div>
                    </div>
                </div>
                
                {/* Galería con diseño creativo */}
                <div className="row grid gx-25" ref={isotopContainer}>
                    {gallery_data.map((item, i) => {
                        // Definir clases de columna basadas en el tamaño
                        let colClass = "";
                        let heightClass = "";                        switch(item.size) {
                            case "large":
                                colClass = "col-lg-6 col-md-12";
                                heightClass = styles.galleryLarge;
                                break;
                            case "medium":
                                colClass = "col-lg-6 col-md-6";
                                heightClass = styles.galleryMedium;
                                break;
                            case "small":
                                colClass = "col-lg-6 col-md-6";
                                heightClass = styles.gallerySmall;
                                break;
                            default:
                                colClass = "col-lg-6 col-md-6";
                                heightClass = styles.gallerySmall;
                        }return (
                            <div key={i} className={`${colClass} col-sm-6 grid-item mb-25`}>
                                <div className={`${styles.galleryThumb} ${heightClass}`}>
                                    <Image 
                                        className={styles.galleryImage} 
                                        src={item.image} 
                                        alt={item.title}
                                        width={800}
                                        height={item.size === 'large' ? 450 : item.size === 'medium' ? 320 : 280}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    {/* Overlay con información */}
                                    <div className={styles.galleryOverlay}>
                                        <div className={styles.galleryContent}>
                                            <span className={styles.galleryDistrict}>
                                                {item.district}
                                            </span>
                                            <h4 className={styles.galleryTitle}>{item.title}</h4>
                                            <p className={styles.galleryDesc}>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>            </div>
        </div>
    )
}
