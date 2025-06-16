import Image from "next/image";
import puertCarrillo from "@/assets/img/hojancha/puertocarrillo.webp";
import monteRomo from "@/assets/img/hojancha/monte_romo.webp";
import matambu from "@/assets/img/hojancha/matambu.webp";

const hojanchaContactData = [
  {
    id: 1,
    icon: "📱",
    title: "Teléfono",
    subtitle: "Municipalidad de Hojancha",
    content: (
      <span>
        Oficina: <a href="tel:+50626580005" style={{color: '#2E8B57', fontWeight: 'bold'}}>+506 2658-0005</a>
      </span>
    ),
    bgImage: puertCarrillo,
    color: "#2E8B57"
  },
  {
    id: 2,
    icon: "✉️",
    title: "Correo Electrónico",
    subtitle: "Contacto oficial",
    content: <a href="mailto:info@hojancha.go.cr" style={{color: '#FF6B35', fontWeight: 'bold'}}>info@hojancha.go.cr</a>,
    bgImage: monteRomo,
    color: "#FF6B35"
  },
  {
    id: 3,
    icon: "📍",
    title: "Ubicación",
    subtitle: "Guanacaste, Costa Rica",
    content: (
      <a 
        href="https://www.google.com/maps/place/Hojancha+Province+of+Guanacaste+Costa+Rica" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{color: '#1E90FF', fontWeight: 'bold'}}
      >
        Hojancha, Guanacaste<br />Costa Rica
      </a>
    ),
    bgImage: matambu,
    color: "#1E90FF"
  }
];export default function ContactItemArea() {
  return (
    <div className="hojancha-contact-districts-area py-5" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <div className="hojancha-districts-header">
              <span className="hojancha-section-badge" style={{
                background: 'linear-gradient(135deg, #2E8B57, #228B22)',
                color: 'white',
                padding: '10px 25px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '20px'
              }}>
                🌺 Descubre Hojancha
              </span>
              <h2 className="hojancha-section-title mb-4" style={{
                fontSize: '2.8rem',
                fontWeight: 'bold',
                color: '#2E8B57',
                marginBottom: '20px'
              }}>
                Información de Contacto
              </h2>
              <p className="hojancha-section-description" style={{
                fontSize: '1.2rem',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Conecta con nosotros para descubrir todo lo que Hojancha tiene para ofrecerte. 
                Desde playas paradisíacas hasta montañas llenas de aventura.
              </p>
            </div>
          </div>
        </div>        {/* Contact Cards */}
        <div className="row justify-content-center">
          {hojanchaContactData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div 
                className="hojancha-contact-card h-100" 
                style={{
                  background: 'white',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  border: `3px solid ${item.color}`,
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = `0 25px 50px rgba(0, 0, 0, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Background Image */}
                <div className="card-bg-image" style={{
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      filter: 'brightness(0.7)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${item.color}CC, ${item.color}99)`
                  }}></div>
                  
                  {/* Icon Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '4rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                  }}>
                    {item.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content p-4 text-center">
                  <div className="hojancha-contact-info">
                    <h4 className="mb-2" style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      color: item.color
                    }}>
                      {item.title}
                    </h4>
                    <p className="mb-3" style={{
                      fontSize: '0.9rem',
                      color: '#666',
                      fontWeight: '500'
                    }}>
                      {item.subtitle}
                    </p>
                    <div className="contact-detail" style={{
                      fontSize: '1rem',
                      color: '#333'
                    }}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <div className="hojancha-cta-section" style={{
              background: 'linear-gradient(135deg, #2E8B57 0%, #228B22 100%)',
              borderRadius: '25px',
              padding: '50px 30px',
              color: 'white'
            }}>
              <h3 className="mb-3" style={{
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                ¡Ven y Vive la Experiencia Hojancha!
              </h3>
              <p className="mb-4" style={{
                fontSize: '1.1rem',
                opacity: '0.9',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                5 distritos únicos te esperan: desde las playas de Puerto Carrillo hasta 
                las montañas de Monte Romo y la cultura chorotega de Matambú.
              </p>
              <div className="hojancha-districts-badges">
                {['Hojancha', 'Monte Romo', 'Huacas', 'Matambú', 'Puerto Carrillo'].map((district, index) => (
                  <span 
                    key={index}
                    className="district-badge" 
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      margin: '5px',
                      display: 'inline-block',
                      border: '2px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {district}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
