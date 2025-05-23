import Image from "next/image";
import { UpArrow } from "../svg";
import logo2 from "@/assets/img/hojancha/logo2.png";
import Link from "next/link";


export default function CtaArea() {
    return (
        <div className="tp-cta-area pt-120 pb-60">
            <div className="container">
                <div className="row">                    <div className="col-lg-6 pb-30">
                        <div className="tp-cta-title-wrap p-relative  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s" style={{ paddingRight: '80px' }}>                            <Image 
                                className="tp-cta-plane p-absolute d-none d-lg-block" 
                                src={logo2} 
                                alt="logo hojancha"
                                style={{
                                    width: '100px',
                                    height: 'auto',
                                    opacity: '0.8',
                                    top: '-30px',
                                    right: '-20px'
                                }}
                            />
                                <h5 className="tp-section-title-cta-pre mb-20">EXPLORA TU PRÓXIMA</h5>
                                <h2 className="tp-section-title-cta">Aventura.</h2>
                        </div>
                    </div><div className="col-lg-6 pb-30">
                        <div className="tp-cta-content  wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1s">
                            <p className="mb-30">Hojancha te espera con sus 5 distritos únicos, donde la tradición cafetera se combina con una biodiversidad excepcional y paisajes montañosos que te conectarán con la esencia pura de Costa Rica.</p>
                            <Link className="tp-btn-sm fs-15" href="/contact">¿Listo para Explorar?
                                <UpArrow/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
