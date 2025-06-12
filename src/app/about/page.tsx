import { Metadata } from 'next';
import AboutHojanchaArea from '@/components/about/about-hojancha-area';
import ImportantPeopleArea from '@/components/important-people/important-people-area';


export const metadata: Metadata = {
    title: "Sobre Hojancha - Naturaleza, Historia y Cultura | Cantón de Hojancha",
    description: "Conoce la historia, cultura y personas importantes de Hojancha. Descubre nuestros 5 distritos únicos: Monte Romo, Puerto Carrillo, Huacas, Matambú y Hojancha Central.",
};


export default function AboutPage() {
    return (
        <>
            {/* about hojancha area start */}
            <AboutHojanchaArea />
            {/* about hojancha area end */}

            {/* important people area start */}
            <ImportantPeopleArea />
            {/* important people area end */}

            {/* counter area start */}
            {/* brand area end */}
        </>
    )
}
