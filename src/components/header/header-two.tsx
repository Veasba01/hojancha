import Image from "next/image";
import Link from "next/link";
import NavMenus from "./components/nav-menus";
import logo2 from '@/assets/img/hojancha/logo2.png';
import HeaderStickyProvider from "./components/header-sticky-provider";
import OffcanvasBtn from "../offcanvas/offcanvas-btn";


export default function HeaderTwo() {
    return (
        <header className="tp-header-height">
            <HeaderStickyProvider top_cls="tp-header-area tp-header-2-border tp-header-sm-spacing">
                <div className="container">
                    <div className="tp-header-main-wrap p-relative">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-6">
                                <div className="tp-header-logo">
                                    <Link href="/">
                                        <Image data-width="138" src={logo2} alt="logo" width={108}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8  d-none d-lg-block">
                                <div className="tp-main-menu tp-main-menu-2 text-center">
                                    <div className="tp-main-menu">
                                        {/* nav menus */}
                                        <NavMenus />
                                        {/* nav menus */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-6">
                                <div className="tp-header-action d-flex justify-content-end">
                                    <div className="tp-header-btn-wrap d-none d-lg-block ml-30">
                                        <Link className="tp-header-btn" href="/game">Juega Ahora</Link>
                                    </div>
                                    <div className="tp-header-2-menu-bar  tp-header-3-menu-bar d-lg-none tp-header-menu-btn-black">
                                        <OffcanvasBtn/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderStickyProvider>
        </header>
    )
}
