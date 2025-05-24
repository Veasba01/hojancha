import BackToTop from "@/components/common/back-to-top";
import HeaderTwo from "@/components/header/header-two";
import FooterTwo from "@/components/footer/footer-two";
import MainProvider from "@/components/provider/main-provider";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainProvider bodyBg="tp-home-3-bg">
            <HeaderTwo/>
            {children}
            <FooterTwo />
            <BackToTop />
        </MainProvider>
    )
}
