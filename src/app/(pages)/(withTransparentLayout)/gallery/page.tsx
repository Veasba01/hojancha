import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import GalleryArea from "@/components/gallery/gallery-area";


export const metadata: Metadata = {
    title: "Galeria - Hojancha",
    description: "Explora la belleza natural y cultural de Hojancha a través de nuestra galería de imágenes. Descubre los paisajes, tradiciones y momentos destacados de nuestros 5 distritos: Puerto Carrillo, Monte Romo, Huacas, Matambú y Hojancha Central."
}

export default function GalleryPage() {
    return (
        <div>

            {/* breadcrumb area start */}
            <BreadcrumbArea subtitle="Naturaleza y Belleza" title="Galeria Hojancha" />
            {/* breadcrumb area end */}

            {/* gallery area start */}
            <GalleryArea />
            {/* gallery area end */}
        </div>
    )
}
