import BackToTop from "@/components/common/back-to-top";
import FooterArea from "@/components/footer/footer-area";
import MainProvider from "@/components/provider/main-provider";
import HeaderTwo from "@/components/header/header-two";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainProvider>
            <HeaderTwo/>
            {children}
            <FooterArea/>
            <BackToTop/>
        </MainProvider>
    )
}
