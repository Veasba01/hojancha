import Image from "next/image";
import { IBlog } from "@/types/blog-d-t";
import BlogSidebar from "../blog-sidebar";
import { LinkSvg, XSvgThree } from "@/components/svg";
import PostboxMoreNavigation from "./postbox-more-navigation";
import PostboxAuthorArea from "./postbox-author-area";
import PostboxCommentArea from "./postbox-comment-area";
import BlogCommentForm from "@/components/form/blog-comment-form";

type IProps = {
  blog: IBlog;
};

export default function BlogDetailsAreaHojancha({ blog }: IProps) {
  const hasDetailedContent = blog.detailedContent;
  const isDistrictBlog = blog.district;

  return (
    <div className="tp-postbox-area pt-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-postbox-wrapper p-relative">
              <div className="tp-postbox-left-social-2 tp-postbox-left-social-transrent">
                <div className="tp-postbox-left-social tp-postbox-left-social-sticky">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="svg" href="#">
                    <XSvgThree />
                  </a>
                  <a href="#">
                    <LinkSvg />
                  </a>
                </div>
              </div>
              <div className="tp-postbox-main">
                <div className="row">
                  <div className="col-lg-8 mb-40">
                    <div className="tp-postbox-main-wrapper">
                      <div className="tp-postbox-details-content-wrapper">
                        
                        {/* Información específica de distrito */}
                        {hasDetailedContent && (
                          <>
                            {/* Información del distrito */}
                            {isDistrictBlog && (
                              <div className="tp-postbox-district-info mb-50" style={{
                                background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05), rgba(76, 175, 80, 0.03))',
                                border: '2px solid rgba(46, 125, 50, 0.1)',
                                borderRadius: '15px',
                                padding: '25px'
                              }}>
                                <div className="d-flex align-items-center mb-20">
                                  <div style={{
                                    background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                                    color: 'white',
                                    padding: '8px 20px',
                                    borderRadius: '25px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    marginRight: '15px'
                                  }}>
                                    🏛️ Distrito de {blog.district}
                                  </div>
                                  <span style={{
                                    color: '#2E7D32',
                                    fontSize: '0.85rem',
                                    fontWeight: '500'
                                  }}>
                                    Cantón de Hojancha, Guanacaste
                                  </span>
                                </div>
                                <p style={{ 
                                  margin: 0, 
                                  color: '#1B5E20', 
                                  lineHeight: '1.6',
                                  fontSize: '0.95rem'                                }}>
                                  {blog.detailedContent?.introduction}
                                </p>
                              </div>
                            )}

                            {/* Historia */}
                            <div className="tp-postbox-section mb-40">
                              <h3 className="tp-postbox-features-title mb-20" style={{ 
                                color: '#2E7D32',
                                borderLeft: '4px solid #4CAF50',
                                paddingLeft: '15px'
                              }}>
                                📚 Historia y Orígenes
                              </h3>                              <div className="tp-postbox-details-content-para mb-20">
                                <p>{blog.detailedContent?.history}</p>
                              </div>
                            </div>

                            {/* Geografía */}
                            <div className="tp-postbox-section mb-40">
                              <h3 className="tp-postbox-features-title mb-20" style={{ 
                                color: '#2E7D32',
                                borderLeft: '4px solid #4CAF50',
                                paddingLeft: '15px'
                              }}>
                                🗺️ Geografía y Ubicación
                              </h3>                              <div className="tp-postbox-details-content-para mb-20">
                                <p>{blog.detailedContent?.geography}</p>
                              </div>
                            </div>

                            {/* Imagen del distrito */}
                            <div className="tp-postbox-details-thumb tp-postbox-details-thumb-2 mb-50">
                              <Image
                                className="w-100"
                                src={blog.imgSrc}
                                alt={`Vista de ${blog.district || 'Hojancha'}`}
                                width={800}
                                height={400}
                                style={{ height: "auto", borderRadius: '10px' }}
                              />
                            </div>

                            {/* Cultura */}
                            <div className="tp-postbox-section mb-40">
                              <h3 className="tp-postbox-features-title mb-20" style={{ 
                                color: '#2E7D32',
                                borderLeft: '4px solid #4CAF50',
                                paddingLeft: '15px'
                              }}>
                                🎭 Cultura y Tradiciones
                              </h3>                              <div className="tp-postbox-details-content-para mb-20">
                                <p>{blog.detailedContent?.culture}</p>
                              </div>
                            </div>

                            {/* Atractivos */}
                            <div className="tp-postbox-features mb-50">
                              <h3 className="tp-postbox-features-title mb-20" style={{ 
                                color: '#2E7D32',
                                borderLeft: '4px solid #4CAF50',
                                paddingLeft: '15px'
                              }}>
                                🌟 Principales Atractivos
                              </h3>                              <div className="row">
                                {blog.detailedContent?.attractions.map((attraction, index) => (
                                  <div key={index} className="col-md-6 mb-15">
                                    <div style={{
                                      background: 'rgba(46, 125, 50, 0.05)',
                                      padding: '12px 15px',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(46, 125, 50, 0.1)'
                                    }}>
                                      <i className="fa-solid fa-leaf" style={{ color: '#4CAF50', marginRight: '8px' }}></i>
                                      {attraction}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Economía */}
                            <div className="tp-postbox-section mb-40">
                              <h3 className="tp-postbox-features-title mb-20" style={{ 
                                color: '#2E7D32',
                                borderLeft: '4px solid #4CAF50',
                                paddingLeft: '15px'
                              }}>
                                💼 Economía Local
                              </h3>                              <div className="tp-postbox-details-content-para mb-20">
                                <p>{blog.detailedContent?.economy}</p>
                              </div>
                            </div>

                            {/* Características Naturales */}
                            <div className="tp-postbox-features mb-50">
                              <h3 className="tp-postbox-features-title mb-20" style={{ 
                                color: '#2E7D32',
                                borderLeft: '4px solid #4CAF50',
                                paddingLeft: '15px'
                              }}>
                                🌿 Características Naturales
                              </h3>                              <ul style={{ listStyle: 'none', padding: 0 }}>
                                {blog.detailedContent?.naturalFeatures.map((feature, index) => (
                                  <li key={index} style={{
                                    padding: '8px 0',
                                    borderBottom: '1px solid rgba(46, 125, 50, 0.1)',
                                    color: '#1B5E20'
                                  }}>
                                    <i className="fa-solid fa-tree" style={{ color: '#4CAF50', marginRight: '10px' }}></i>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Festivales */}
                            <div className="tp-postbox-features mb-50">
                              <h3 className="tp-postbox-features-title mb-20" style={{ 
                                color: '#2E7D32',
                                borderLeft: '4px solid #4CAF50',
                                paddingLeft: '15px'
                              }}>
                                🎉 Festivales y Celebraciones
                              </h3>                              <div className="row">
                                {blog.detailedContent?.festivals.map((festival, index) => (
                                  <div key={index} className="col-md-6 mb-15">
                                    <div style={{
                                      background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 152, 0, 0.05))',
                                      padding: '12px 15px',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(255, 193, 7, 0.2)'
                                    }}>
                                      <i className="fa-solid fa-calendar-days" style={{ color: '#FF9800', marginRight: '8px' }}></i>
                                      {festival}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Recomendaciones */}
                            <div className="tp-postbox-quote tp-postbox-quote-2 mb-40">
                              <blockquote style={{
                                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.05), rgba(25, 118, 210, 0.03))',
                                border: '2px solid rgba(33, 150, 243, 0.1)',
                                borderRadius: '10px'
                              }}>
                                <div className="tp-postbox-quote-icon">
                                  <i className="fa-solid fa-lightbulb" style={{ fontSize: '2rem', color: '#2196F3' }}></i>
                                </div>
                                <div className="tp-postbox-quote-meta tp-postbox-quote-meta-2">
                                  <h6 className="tp-postbox-quote-meta-title tp-postbox-quote-meta-title-2 mb-15" style={{ color: '#1976D2' }}>
                                    💡 Recomendaciones para tu Visita
                                  </h6>                                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {blog.detailedContent?.recommendations.map((recommendation, index) => (
                                      <li key={index} style={{
                                        padding: '5px 0',
                                        color: '#1565C0',
                                        fontSize: '0.9rem'
                                      }}>
                                        <i className="fa-solid fa-check-circle" style={{ color: '#4CAF50', marginRight: '8px' }}></i>
                                        {recommendation}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </blockquote>
                            </div>

                            {/* Accesibilidad */}
                            <div className="tp-postbox-section mb-40">
                              <h3 className="tp-postbox-features-title mb-20" style={{ 
                                color: '#2E7D32',
                                borderLeft: '4px solid #4CAF50',
                                paddingLeft: '15px'
                              }}>
                                🚗 Cómo Llegar y Accesibilidad
                              </h3>
                              <div className="tp-postbox-details-content-para mb-20" style={{
                                background: 'rgba(96, 125, 139, 0.05)',
                                padding: '15px',
                                borderRadius: '8px',
                                border: '1px solid rgba(96, 125, 139, 0.1)'
                              }}>
                                <p style={{ margin: 0, color: '#37474F' }}>                                  <i className="fa-solid fa-map-location-dot" style={{ color: '#607D8B', marginRight: '8px' }}></i>
                                  {blog.detailedContent?.accessibility}
                                </p>
                              </div>
                            </div>
                          </>
                        )}

                        {/* Contenido original para blogs sin información detallada */}
                        {!hasDetailedContent && (
                          <>
                            <div className="tp-postbox-details-content-para tp-postbox-details-content-para-2 mb-50">
                              <p className="first-para first-para-2 mb-10">
                                {blog.description}
                              </p>
                              <p className="mb-25">
                                Descubre más sobre este fascinante lugar de Hojancha y sumérgete en sus tradiciones, naturaleza y cultura única.
                              </p>
                            </div>
                            <div className="tp-postbox-details-thumb tp-postbox-details-thumb-2 mb-50">
                              <Image
                                className="w-100"
                                src={blog.imgSrc}
                                alt="thumb"
                                width={800}
                                height={400}
                                style={{ height: "auto" }}
                              />
                            </div>
                          </>
                        )}

                        {/* Tags y compartir */}
                        <div className="tp-postbox-share-wrapper tp-postbox-share-wrapper-2 mb-45">
                          <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8">
                              <div className="tagcloud tagcloud-details tagcloud-details-2">
                                {blog.district && <a href="#" style={{ background: '#2E7D32', color: 'white' }}>{blog.district}</a>}
                                <a href="#">Hojancha</a>
                                <a href="#">Guanacaste</a>
                                <a href="#">Turismo</a>
                                <a href="#">Costa Rica</a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <div className="tp-postbox-left-social tp-postbox-share-social tp-postbox-share-social-2">
                                <a href="#">
                                  <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a className="svg" href="#">
                                  <XSvgThree />
                                </a>
                                <a href="#">
                                  <LinkSvg />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* postbox navigation */}
                        {/* <PostboxMoreNavigation />
                        {/* postbox navigation */}

                        {/* postbox author area */}
                        {/* <PostboxAuthorArea /> */}
                        {/* postbox author area */}

                        {/* postbox comment area start */}
                        {/* <PostboxCommentArea />  */}
                        {/* postbox comment area end */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 pb-50">
                    {/* blog sidebar */}
                    <BlogSidebar top_cls="tp-sticky" />
                    {/* blog sidebar */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
