import { Metadata } from 'next';
import BreadcrumbArea from '@/components/breadcrumb/breadcrumb-area';
import GameArea from '@/components/game';


export const metadata: Metadata = {
    title: "Juego - Descubre Hojancha",
    description: "Juega y aprende sobre los 5 distritos de Hojancha, Costa Rica"
};


export default function GamePage() {
    return (
        <>
            {/* breadcrumb area start */}
            <BreadcrumbArea
                title="Juego de Hojancha"
                subtitle="Descubre y Aprende"
            />
            {/* breadcrumb area end */}

            {/* game area start */}
            <GameArea />
            {/* game area end */}
        </>
    );
}
