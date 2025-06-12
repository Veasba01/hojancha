'use client';
import Image from "next/image";

// Importar imágenes de los distritos
import hojancha_img from '@/assets/img/hojancha/hojancha.webp';
import monte_romo_img from '@/assets/img/hojancha/monte_romo.webp';
import huacas_img from '@/assets/img/hojancha/huacas.webp';
import matambu_img from '@/assets/img/hojancha/matambu.webp';
import puerto_carrillo_img from '@/assets/img/hojancha/puertocarrillo.webp';

export default function AboutHojanchaArea() {
    const districts = [
        {
            name: "Hojancha Central",
            image: hojancha_img,
            description: "El corazón del cantón, centro administrativo y cultural con más de 175 años de historia.",
            features: ["Centro administrativo", "Tradición cafetera", "Patrimonio histórico"]
        },
        {
            name: "Monte Romo",
            image: monte_romo_img,
            description: "Distrito montañoso conocido por sus paisajes espectaculares y café de altura.",
            features: ["Paisajes montañosos", "Café de altura", "Vistas panorámicas"]
        },
        {
            name: "Puerto Carrillo",
            image: puerto_carrillo_img,
            description: "Único distrito costero con hermosas playas del Pacífico y tradición pesquera.",
            features: ["Playas vírgenes", "Tradición pesquera", "Turismo costero"]
        },
        {
            name: "Huacas",
            image: huacas_img,
            description: "Rica herencia arqueológica precolombina y biodiversidad excepcional.",
            features: ["Sitios arqueológicos", "Biodiversidad", "Cultura precolombina"]
        },
        {
            name: "Matambú",
            image: matambu_img,
            description: "Epicentro del ecoturismo y conservación, reserva indígena chorotega.",
            features: ["Ecoturismo", "Conservación", "Cultura chorotega"]
        }
    ];

    return (
        <div className="tp-about-hojancha-area pt-120 pb-90">
            <div className="container">
                {/* Hero Section */}
                <div className="row align-items-center mb-80">
                    <div className="col-lg-6">
                        <div className="tp-about-hojancha-content">
                            <h5 className="tp-section-two-title-pre wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                Descubre Hojancha
                            </h5>
                            <h2 className="tp-section-two-title wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                Más de 175 años de historia, naturaleza y cultura
                            </h2>
                            <p className="mb-30 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                                Hojancha, fundado en 1848, es un cantón que representa la esencia auténtica de Costa Rica. 
                                Ubicado en la hermosa provincia de Guanacaste, nuestros cinco distritos únicos ofrecen 
                                desde playas vírgenes hasta montañas cafeteras, pasando por rica herencia arqueológica 
                                y tradiciones que perduran en el tiempo.
                            </p>

                            <div className="row mb-40">
                                <div className="col-sm-6">
                                    <div className="tp-about-hojancha-feature d-flex align-items-center mb-20">
                                        <div style={{
                                            background: '#2E7D32',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '50%',
                                            marginRight: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minWidth: '50px',
                                            height: '50px'
                                        }}>
                                            <i className="fa-solid fa-map" style={{ fontSize: '1.2rem' }}></i>
                                        </div>
                                        <div>
                                            <h6 style={{ margin: '0', color: '#2E7D32' }}>5 Distritos</h6>
                                            <span style={{ fontSize: '0.9rem', color: '#666' }}>Únicos y diversos</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="tp-about-hojancha-feature d-flex align-items-center mb-20">
                                        <div style={{
                                            background: '#4CAF50',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '50%',
                                            marginRight: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minWidth: '50px',
                                            height: '50px'
                                        }}>
                                            <i className="fa-solid fa-seedling" style={{ fontSize: '1.2rem' }}></i>
                                        </div>
                                        <div>
                                            <h6 style={{ margin: '0', color: '#2E7D32' }}>Tradición Cafetera</h6>
                                            <span style={{ fontSize: '0.9rem', color: '#666' }}>Café de altura</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="tp-about-hojancha-feature d-flex align-items-center mb-20">
                                        <div style={{
                                            background: '#FF9800',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '50%',
                                            marginRight: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minWidth: '50px',
                                            height: '50px'
                                        }}>
                                            <i className="fa-solid fa-calendar" style={{ fontSize: '1.2rem' }}></i>
                                        </div>
                                        <div>
                                            <h6 style={{ margin: '0', color: '#2E7D32' }}>Desde 1848</h6>
                                            <span style={{ fontSize: '0.9rem', color: '#666' }}>175+ años</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="tp-about-hojancha-feature d-flex align-items-center mb-20">
                                        <div style={{
                                            background: '#2196F3',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '50%',
                                            marginRight: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minWidth: '50px',
                                            height: '50px'
                                        }}>
                                            <i className="fa-solid fa-wave-square" style={{ fontSize: '1.2rem' }}></i>
                                        </div>
                                        <div>
                                            <h6 style={{ margin: '0', color: '#2E7D32' }}>Costa Pacífica</h6>
                                            <span style={{ fontSize: '0.9rem', color: '#666' }}>Playas vírgenes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-about-hojancha-img wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                            <Image
                                src={hojancha_img}
                                alt="Vista panorámica de Hojancha"
                                width={600}
                                height={400}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Nuestros Distritos */}
                <div className="row">
                    <div className="col-12">
                        <div className="tp-section-title-wrap text-center mb-60">
                            <h5 className="tp-section-two-title-pre wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                Nuestros Distritos
                            </h5>
                            <h2 className="tp-section-two-title wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                Cinco joyas en un solo cantón
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {districts.map((district, index) => (
                        <div key={index} className="col-lg-6 col-md-6">
                            <div 
                                className="tp-district-card h-100 wow fadeInUp" 
                                data-wow-delay={`${0.2 + (index * 0.1)}s`} 
                                data-wow-duration="1s"
                                style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    background: '#fff',
                                    border: '1px solid rgba(46, 125, 50, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(46, 125, 50, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div className="row g-0 h-100">
                                    <div className="col-5">
                                        <div style={{ height: '100%', minHeight: '200px', position: 'relative' }}>
                                            <Image
                                                src={district.image}
                                                alt={district.name}
                                                fill
                                                style={{ 
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div style={{ padding: '25px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <h4 style={{ 
                                                color: '#2E7D32', 
                                                marginBottom: '12px', 
                                                fontSize: '1.2rem',
                                                fontWeight: '600'
                                            }}>
                                                {district.name}
                                            </h4>
                                            <p style={{ 
                                                color: '#666', 
                                                fontSize: '0.9rem', 
                                                marginBottom: '15px',
                                                lineHeight: '1.4'
                                            }}>
                                                {district.description}
                                            </p>
                                            <div className="tp-district-features">
                                                {district.features.map((feature, featureIndex) => (
                                                    <span 
                                                        key={featureIndex}
                                                        style={{
                                                            display: 'inline-block',
                                                            background: 'rgba(46, 125, 50, 0.1)',
                                                            color: '#2E7D32',
                                                            padding: '4px 8px',
                                                            borderRadius: '12px',
                                                            fontSize: '0.75rem',
                                                            marginRight: '6px',
                                                            marginBottom: '6px',
                                                            fontWeight: '500'
                                                        }}
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Llamada a la acción */}
                <div className="row mt-80">
                    <div className="col-12">
                        <div style={{
                            background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                            borderRadius: '20px',
                            padding: '50px 30px',
                            textAlign: 'center',
                            color: 'white'
                        }}>
                            <h3 style={{ marginBottom: '20px', fontSize: '2rem' }}>
                                🌿 Vive la Experiencia Hojancha
                            </h3>
                            <p style={{ marginBottom: '30px', fontSize: '1.1rem', opacity: '0.9' }}>
                                Desde montañas cafeteras hasta playas del Pacífico, desde sitios arqueológicos 
                                hasta bosques protegidos. Hojancha te espera con más de 175 años de historia 
                                y la calidez de su gente.
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <a 
                                    href="/game" 
                                    style={{
                                        background: 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid rgba(255,255,255,0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.color = '#2E7D32';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                >
                                    🎮 Juega y Aprende
                                </a>
                                <a 
                                    href="/blog" 
                                    style={{
                                        background: 'rgba(255,255,255,0.2)',
                                        color: 'white',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid rgba(255,255,255,0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.color = '#2E7D32';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                >
                                    📖 Explora Nuestros Distritos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
