import Image from "next/image";
import ContactForm from "../form/contact-form";


export default function ContactArea() {
    return (
        <div className="hojancha-contact-area p-relative pt-120 mb-120">
            {/* Hero Section with Hojancha Background */}            <div className="hojancha-contact-hero" style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/img/hojancha/hojancha.webp)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 0',
                marginBottom: '80px'
            }}>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <div className="hojancha-contact-hero-content">                                <div className="hojancha-logo-wrapper mb-4">
                                    <Image 
                                        src="/assets/img/hojancha/logo2.png" 
                                        alt="Hojancha Logo" 
                                        width={120} 
                                        height={120}
                                        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                                    />
                                </div>
                                <h1 className="hojancha-hero-title text-white mb-4" style={{
                                    fontSize: '3.5rem',
                                    fontWeight: 'bold',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                }}>
                                    Contáctanos
                                </h1>
                                <p className="hojancha-hero-subtitle text-white mb-0" style={{
                                    fontSize: '1.3rem',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                }}>
                                    Descubre la belleza natural y cultural de Hojancha, Guanacaste
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12">
                        <div className="hojancha-contact-wrapper">
                            {/* Contact Info Section */}
                            <div className="row mb-5">
                                <div className="col-lg-6 mb-4">
                                    <div className="hojancha-contact-info-card" style={{
                                        background: 'linear-gradient(135deg, #2E8B57 0%, #228B22 100%)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        color: 'white',
                                        boxShadow: '0 10px 30px rgba(46, 139, 87, 0.3)',
                                        height: '100%'
                                    }}>
                                        <div className="text-center">
                                            <div className="hojancha-icon mb-3" style={{
                                                fontSize: '3rem',
                                                background: 'rgba(255,255,255,0.2)',
                                                borderRadius: '50%',
                                                width: '80px',
                                                height: '80px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}>
                                                🌿
                                            </div>
                                            <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                Turismo Sostenible
                                            </h3>
                                            <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                                Explora nuestros 5 distritos: Hojancha, Monte Romo, Huacas, Matambú y Puerto Carrillo. 
                                                Cada uno con su propia identidad y belleza natural.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="hojancha-contact-info-card" style={{
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                                        borderRadius: '20px',
                                        padding: '40px 30px',
                                        color: 'white',
                                        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)',
                                        height: '100%'
                                    }}>
                                        <div className="text-center">
                                            <div className="hojancha-icon mb-3" style={{
                                                fontSize: '3rem',
                                                background: 'rgba(255,255,255,0.2)',
                                                borderRadius: '50%',
                                                width: '80px',
                                                height: '80px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto'
                                            }}>
                                                🎨
                                            </div>
                                            <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                Cultura Chorotega
                                            </h3>
                                            <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                                Descubre la rica herencia cultural de nuestros pueblos indígenas, 
                                                especialmente en el distrito de Matambú.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form Section */}
                            <div className="hojancha-contact-form-section" style={{
                                background: 'white',
                                borderRadius: '25px',
                                padding: '50px 40px',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                                border: '3px solid #2E8B57'
                            }}>
                                <div className="text-center mb-5">
                                    <span className="hojancha-contact-badge" style={{
                                        background: 'linear-gradient(135deg, #2E8B57, #228B22)',
                                        color: 'white',
                                        padding: '10px 25px',
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        fontWeight: 'bold',
                                        display: 'inline-block',
                                        marginBottom: '20px'
                                    }}>
                                        ¡Conectemos!
                                    </span>
                                    <h2 className="hojancha-contact-title mb-4" style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 'bold',
                                        color: '#2E8B57'
                                    }}>
                                        Escríbenos
                                    </h2>
                                    <p className="hojancha-contact-description" style={{
                                        fontSize: '1.1rem',
                                        color: '#666',
                                        maxWidth: '600px',
                                        margin: '0 auto'
                                    }}>
                                        ¿Tienes preguntas sobre nuestros destinos, actividades o servicios turísticos? 
                                        Estamos aquí para ayudarte a planificar tu visita perfecta a Hojancha.
                                    </p>
                                </div>

                                <div className="hojancha-contact-benefits mb-5">
                                    <div className="row">
                                        <div className="col-md-4 text-center mb-3">
                                            <div className="hojancha-benefit-item">
                                                <div className="benefit-icon mb-2" style={{
                                                    fontSize: '2rem',
                                                    color: '#2E8B57'
                                                }}>
                                                    🏖️
                                                </div>
                                                <h6 style={{ color: '#2E8B57', fontWeight: 'bold' }}>
                                                    Playas Vírgenes
                                                </h6>
                                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                                    Puerto Carrillo y sus costas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 text-center mb-3">
                                            <div className="hojancha-benefit-item">
                                                <div className="benefit-icon mb-2" style={{
                                                    fontSize: '2rem',
                                                    color: '#2E8B57'
                                                }}>
                                                    ⛰️
                                                </div>
                                                <h6 style={{ color: '#2E8B57', fontWeight: 'bold' }}>
                                                    Aventura Rural
                                                </h6>
                                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                                    Monte Romo y sus senderos
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 text-center mb-3">
                                            <div className="hojancha-benefit-item">
                                                <div className="benefit-icon mb-2" style={{
                                                    fontSize: '2rem',
                                                    color: '#2E8B57'
                                                }}>
                                                    🏺
                                                </div>
                                                <h6 style={{ color: '#2E8B57', fontWeight: 'bold' }}>
                                                    Arte Ancestral
                                                </h6>
                                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                                    Cerámica chorotega en Matambú
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hojancha-contact-form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
