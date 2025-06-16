import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";

export const metadata: Metadata = {
    title: "Contacto - Descubre Hojancha",
    description: "Contacta con nosotros para conocer más sobre los 5 distritos de Hojancha: Puerto Carrillo, Monte Romo, Huacas, Matambú y Hojancha Centro"
};


export default function ContactPage() {
    return (
        <>

            {/* contact area start */}
            <ContactArea/>
            {/* contact area end */}

            {/* contact item area start */}
             
            {/* contact item area end */}

        </>
    )
}
