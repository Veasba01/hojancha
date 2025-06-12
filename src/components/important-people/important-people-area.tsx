'use client';
import Image from "next/image";
import { importantPeople } from "@/data/important-people-data";

export default function ImportantPeopleArea() {
    return (
        <div className="tp-important-people-area pt-120 pb-90">
            <div className="container">
                {/* Título de la sección */}
                <div className="row">
                    <div className="col-12">
                        <div className="tp-section-title-wrap text-center mb-60">
                            <h5 className="tp-section-two-title-pre wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                Personas Importantes
                            </h5>
                            <h2 className="tp-section-two-title wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                                Figuras que Forjaron Nuestra Historia
                            </h2>
                            <p className="tp-section-title-desc">
                                Conoce a las personas que han marcado la historia y desarrollo de Hojancha, 
                                desde sus fundadores hasta figuras contemporáneas que nos han dado orgullo y reconocimiento.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid de personas importantes */}
                <div className="row g-4">
                    {importantPeople.map((person, index) => (
                        <div key={person.id} className="col-lg-4 col-md-6">
                            <div 
                                className="tp-person-card h-100 wow fadeInUp" 
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
                                {/* Imagen de la persona */}
                                <div className="tp-person-img" style={{ 
                                    height: '250px', 
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <Image 
                                        src={person.image}
                                        alt={person.name}
                                        width={400}
                                        height={250}
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onError={(e) => {
                                            // Fallback a placeholder si la imagen no carga
                                            e.currentTarget.src = "https://placehold.co/400x250/2E7D32/ffffff?text=" + encodeURIComponent(person.name);
                                        }}
                                    />
                                    
                                    {/* Badge con año si está disponible */}
                                    {person.year && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            right: '15px',
                                            background: 'rgba(46, 125, 50, 0.9)',
                                            color: 'white',
                                            padding: '5px 12px',
                                            borderRadius: '15px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600'
                                        }}>
                                            {person.year}
                                        </div>
                                    )}

                                    {/* Badge con distrito si está disponible */}
                                    {person.district && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            left: '15px',
                                            background: 'rgba(255, 193, 7, 0.9)',
                                            color: '#333',
                                            padding: '5px 12px',
                                            borderRadius: '15px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600'
                                        }}>
                                            {person.district}
                                        </div>
                                    )}
                                </div>

                                {/* Contenido de la persona */}
                                <div className="tp-person-content" style={{ padding: '25px' }}>
                                    <h4 style={{ 
                                        color: '#2E7D32', 
                                        marginBottom: '8px', 
                                        fontSize: '1.3rem',
                                        fontWeight: '600'
                                    }}>
                                        {person.name}
                                    </h4>
                                    
                                    <span style={{
                                        color: '#4CAF50',
                                        fontSize: '0.9rem',
                                        fontWeight: '500',
                                        marginBottom: '15px',
                                        display: 'block'
                                    }}>
                                        {person.role}
                                    </span>
                                    
                                    <p style={{ 
                                        color: '#666', 
                                        fontSize: '0.9rem', 
                                        lineHeight: '1.5',
                                        margin: '0'
                                    }}>
                                        {person.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Texto adicional */}
                <div className="row mt-60">
                    <div className="col-12">
                        <div className="text-center">
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05), rgba(76, 175, 80, 0.03))',
                                border: '2px solid rgba(46, 125, 50, 0.1)',
                                borderRadius: '15px',
                                padding: '30px',
                                maxWidth: '800px',
                                margin: '0 auto'
                            }}>
                                <h4 style={{ 
                                    color: '#2E7D32', 
                                    marginBottom: '15px',
                                    fontSize: '1.4rem'
                                }}>
                                    🌟 Legado Vivo de Hojancha
                                </h4>
                                <p style={{ 
                                    color: '#1B5E20', 
                                    margin: '0',
                                    fontSize: '1rem',
                                    lineHeight: '1.6'
                                }}>
                                    Estas figuras representan el espíritu emprendedor, la dedicación al servicio 
                                    y el amor por nuestra tierra que caracterizan a Hojancha. Su legado continúa 
                                    inspirando a las nuevas generaciones a construir un futuro próspero para nuestro cantón.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
