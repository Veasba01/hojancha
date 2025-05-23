'use client';

import Image from "next/image";
import Link from "next/link";

// Import Hojancha district images
import hojancha_img from '@/assets/img/hojancha/hojancha.webp';
import monte_romo_img from '@/assets/img/hojancha/monte_romo.webp';
import huacas_img from '@/assets/img/hojancha/huacas.webp';
import matambu_img from '@/assets/img/hojancha/matambu.webp';
import puerto_carrillo_img from '@/assets/img/hojancha/puertocarrillo.webp';

export default function HeroBannerTwo() {
    return (
        <div className="tp-hero-area p-relative z-index-1 pb-120 pt-80" style={{ 
            background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(67, 160, 71, 0.05) 100%)',
            minHeight: '100vh'
        }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 text-center">
                        {/* Main Title Section */}
                        <div className="tp-hero-content mb-60">
                            <div className="tp-hero-title-wrap">
                                <h5 className="tp-hero-subtitle mb-15 text-uppercase" style={{ 
                                    color: '#2E7D32', 
                                    fontWeight: '600',
                                    letterSpacing: '2px'
                                }}>
                                    Descubre la Naturaleza
                                </h5>
                                <h1 className="tp-hero-title mb-30" style={{ 
                                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                    fontWeight: '700',
                                    color: '#1B5E20',
                                    lineHeight: '1.2'
                                }}>
                                    Bienvenido a <br />
                                    <span style={{ 
                                        background: 'linear-gradient(45deg, #2E7D32, #43A047)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}>
                                        Hojancha
                                    </span>
                                </h1>
                                <p className="tp-hero-desc mb-40" style={{ 
                                    fontSize: '1.2rem',
                                    color: '#37474F',
                                    maxWidth: '600px',
                                    margin: '0 auto 40px',
                                    lineHeight: '1.6'
                                }}>
                                    Explora la rica biodiversidad, paisajes montañosos y cultura cafetera 
                                    de uno de los cantones más hermosos de Guanacaste, Costa Rica.
                                </p>
                            </div>
                        </div>

                        {/* Districts Grid */}
                        <div className="tp-hero-districts mb-60">
                            <h3 className="mb-40" style={{ 
                                color: '#2E7D32',
                                fontSize: '2rem',
                                fontWeight: '600'
                            }}>
                                Nuestros Distritos
                            </h3>
                            <div className="row g-4">
                                {/* Hojancha Central */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="tp-district-card p-relative" style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        background: '#fff'
                                    }}>                                        <div className="tp-district-img" style={{ height: '200px', overflow: 'hidden' }}>
                                            <Image 
                                                src={hojancha_img} 
                                                alt="Hojancha Central" 
                                                width={400} 
                                                height={200}
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        </div>
                                        <div className="tp-district-content" style={{ padding: '20px' }}>
                                            <h4 style={{ color: '#2E7D32', marginBottom: '10px', fontSize: '1.2rem' }}>Hojancha Central</h4>
                                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', minHeight: '40px' }}>
                                                El corazón del cantón, centro de la cultura cafetera
                                            </p>
                                            <Link href="/blog-details/7" style={{
                                                background: '#2E7D32',
                                                color: 'white',
                                                padding: '10px 24px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                display: 'inline-block',
                                                border: 'none',
                                                boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Explorar
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Monte Romo */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="tp-district-card p-relative" style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        background: '#fff'
                                    }}>                                        <div className="tp-district-img" style={{ height: '200px', overflow: 'hidden' }}>
                                            <Image 
                                                src={monte_romo_img} 
                                                alt="Monte Romo" 
                                                width={400} 
                                                height={200}
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        </div>
                                        <div className="tp-district-content" style={{ padding: '20px' }}>
                                            <h4 style={{ color: '#2E7D32', marginBottom: '10px', fontSize: '1.2rem' }}>Monte Romo</h4>
                                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', minHeight: '40px' }}>
                                                Paisajes montañosos y rica biodiversidad
                                            </p>
                                            <Link href="/blog-details/8" style={{
                                                background: '#2E7D32',
                                                color: 'white',
                                                padding: '10px 24px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                display: 'inline-block',
                                                border: 'none',
                                                boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Explorar
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Huacas */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="tp-district-card p-relative" style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        background: '#fff'
                                    }}>                                        <div className="tp-district-img" style={{ height: '200px', overflow: 'hidden' }}>
                                            <Image 
                                                src={huacas_img} 
                                                alt="Huacas" 
                                                width={400} 
                                                height={200}
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        </div>
                                        <div className="tp-district-content" style={{ padding: '20px' }}>
                                            <h4 style={{ color: '#2E7D32', marginBottom: '10px', fontSize: '1.2rem' }}>Huacas</h4>
                                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', minHeight: '40px' }}>
                                                Naturaleza exuberante y ecoturismo
                                            </p>
                                            <Link href="/blog-details/9" style={{
                                                background: '#2E7D32',
                                                color: 'white',
                                                padding: '10px 24px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                display: 'inline-block',
                                                border: 'none',
                                                boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Explorar
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Matambú */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="tp-district-card p-relative" style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        background: '#fff'
                                    }}>                                        <div className="tp-district-img" style={{ height: '200px', overflow: 'hidden' }}>
                                            <Image 
                                                src={matambu_img} 
                                                alt="Matambú" 
                                                width={400} 
                                                height={200}
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        </div>
                                        <div className="tp-district-content" style={{ padding: '20px' }}>
                                            <h4 style={{ color: '#2E7D32', marginBottom: '10px', fontSize: '1.2rem' }}>Matambú</h4>
                                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', minHeight: '40px' }}>
                                                Tradición agrícola y belleza natural
                                            </p>
                                            <Link href="/blog-details/10" style={{
                                                background: '#2E7D32',
                                                color: 'white',
                                                padding: '10px 24px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                display: 'inline-block',
                                                border: 'none',
                                                boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Explorar
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Puerto Carrillo */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="tp-district-card p-relative" style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        background: '#fff'
                                    }}>                                        <div className="tp-district-img" style={{ height: '200px', overflow: 'hidden' }}>
                                            <Image 
                                                src={puerto_carrillo_img} 
                                                alt="Puerto Carrillo" 
                                                width={400} 
                                                height={200}
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        </div>
                                        <div className="tp-district-content" style={{ padding: '20px' }}>
                                            <h4 style={{ color: '#2E7D32', marginBottom: '10px', fontSize: '1.2rem' }}>Puerto Carrillo</h4>
                                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', minHeight: '40px' }}>
                                                Belleza costera y diversidad cultural
                                            </p>
                                            <Link href="/blog-details/11" style={{
                                                background: '#2E7D32',
                                                color: 'white',
                                                padding: '10px 24px',
                                                borderRadius: '25px',
                                                textDecoration: 'none',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                display: 'inline-block',
                                                border: 'none',
                                                boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                Explorar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="tp-hero-cta">
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <Link href="/about" className="tp-btn-lg" style={{
                                    background: 'linear-gradient(45deg, #2E7D32, #43A047)',
                                    color: 'white',
                                    padding: '15px 35px',
                                    borderRadius: '30px',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    boxShadow: '0 5px 20px rgba(46, 125, 50, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Conoce Más Sobre Nosotros
                                </Link>
                                <Link href="/contact" className="tp-btn-outline" style={{
                                    border: '2px solid #2E7D32',
                                    color: '#2E7D32',
                                    padding: '13px 35px',
                                    borderRadius: '30px',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    background: 'transparent',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Contáctanos
                                </Link>
                            </div>
                        </div>

                        {/* Floating Elements for Visual Appeal */}
                        <div className="tp-hero-floating-elements">
                            <div className="floating-leaf" style={{
                                position: 'absolute',
                                top: '20%',
                                left: '10%',
                                width: '30px',
                                height: '30px',
                                background: 'linear-gradient(45deg, #4CAF50, #66BB6A)',
                                borderRadius: '0 100% 0 100%',
                                animation: 'float 6s ease-in-out infinite',
                                opacity: '0.7'
                            }}></div>
                            <div className="floating-leaf" style={{
                                position: 'absolute',
                                top: '40%',
                                right: '15%',
                                width: '25px',
                                height: '25px',
                                background: 'linear-gradient(45deg, #81C784, #A5D6A7)',
                                borderRadius: '0 100% 0 100%',
                                animation: 'float 8s ease-in-out infinite reverse',
                                opacity: '0.6'
                            }}></div>
                            <div className="floating-leaf" style={{
                                position: 'absolute',
                                bottom: '30%',
                                left: '20%',
                                width: '20px',
                                height: '20px',
                                background: 'linear-gradient(45deg, #388E3C, #4CAF50)',
                                borderRadius: '0 100% 0 100%',
                                animation: 'float 7s ease-in-out infinite',
                                opacity: '0.5'
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                .tp-district-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
                }
                
                .tp-district-card:hover .tp-district-img img {
                    transform: scale(1.1);
                }
                
                .tp-btn-lg:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(46, 125, 50, 0.4) !important;
                }
                
                .tp-btn-outline:hover {
                    background: #2E7D32 !important;
                    color: white !important;
                    transform: translateY(-2px);
                }
                
                @media (max-width: 768px) {
                    .tp-hero-content h1 {
                        font-size: 2.5rem !important;
                    }
                    .tp-hero-content p {
                        font-size: 1rem !important;
                    }
                }
            `}</style>
        </div>
    )
}
