import { XSvgTwo } from "../svg";

export default function FooterTwo() {
  return (
    <footer>
    <div className="tp-footer-two-area">
       <div className="container">
          <div className="row tp-footer-border-2 mb-40 pt-50">
             <div className="col-lg-5 col-md-7 col-12 mb-30">
                <div className="tp-footer-widget-2">
                   <h3 className="tp-footer-widget-title-2 mb-15">Mantente conectado <br/>con Hojancha</h3>
                   <div className="tp-footer-form-2 mb-30">
                      <form action="#">
                         <div className="tp-footer-input-2 p-relative">
                            <input type="email" placeholder="Ingresa tu correo electrónico"/>
                            <button type="button" className="tp-footer-input-btn tp-footer-input-btn-2 p-absolute">Suscribirse</button>
                         </div>
                      </form>
                   </div>
                   <div className="tp-footer-social-2">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"> <XSvgTwo/> </a>
                   </div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                <div className="tp-footer-widget-content tp-footer-widget-content-2 ml-100">
                   <h4 className="tp-footer-widget-title mb-20 text-black">Distritos de Hojancha</h4>
                   <ul>
                      <li><a href="/distrito/hojancha-central">Hojancha Central</a></li>
                      <li><a href="/distrito/monte-romo">Monte Romo</a></li>
                      <li><a href="/distrito/huacas">Huacas</a></li>
                      <li><a href="/distrito/matambu">Matambú</a></li>
                      <li><a href="/distrito/puerto-carrillo">Puerto Carrillo</a></li>
                   </ul>
                </div>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
                <div className="tp-footer-widget-content tp-footer-widget-content-2">
                   <h4 className="tp-footer-widget-title mb-20 text-black">Explora</h4>
                   <ul>
                      <li><a href="/about">Acerca de Hojancha</a></li>
                      <li><a href="/activities">Actividades</a></li>
                      <li><a href="/cultura-cafetera">Cultura Cafetera</a></li>
                      <li><a href="/ecoturismo">Ecoturismo</a></li>
                      <li><a href="/contact">Contacto</a></li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
       <div className="tp-footer-bottom-2 tp-bg-gray-3">
          <div className="container">
             <div className="row align-items-center">
                <div className="col-md-6 pb-20">
                   <div className="tp-footer-copyright tp-footer-copyright-2">
                      <p>Copyright © {new Date().getFullYear()} <a href="#">Municipalidad de Hojancha</a>. Todos los derechos reservados.</p>
                   </div>
                </div>
                <div className="col-md-6 pb-20">
                   <div className="tp-footer-card text-right">
                      <p className="text-sm text-gray-600">Guanacaste, Costa Rica</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </footer>
  )
}
