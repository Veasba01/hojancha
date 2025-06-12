import BackToTop from "@/components/common/back-to-top";
import HeaderTwo from "@/components/header/header-two";
import MainProvider from "@/components/provider/main-provider";
import FooterTwo from "@/components/footer/footer-two";


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
