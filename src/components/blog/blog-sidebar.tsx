import Image from 'next/image';
import { Search } from '../svg';
import { blog_postbox_data } from '@/data/blog-data';
import Link from 'next/link';

const blogCategoryData = [
    {
        id: 1,
        imgSrc: "/assets/img/gellary/hojancha/img_20171027_153533.jpg",
        title: "Historia y Cultura",
        count: 8
    },
    {
        id: 2,
        imgSrc: "/assets/img/gellary/hojancha/Puerto Carrillo editada (1).png",
        title: "Ecoturismo",
        count: 12
    },
    {
        id: 3,
        imgSrc: "/assets/img/gellary/hojancha/Matambu 3-2-3 (1).jpg",
        title: "Naturaleza",
        count: 15
    },
    {
        id: 4,
        imgSrc: "/assets/img/gellary/hojancha/DMonte Romo Modificado (1).png",
        title: "Aventura",
        count: 6
    },
];

type IProps = {
    top_cls?: string
}
export default function BlogSidebar({top_cls=''}: IProps) {
    const recent_posts = [...blog_postbox_data].slice(0, 3);
    return (
        <div className={`tp-sidebar-wrapper ${top_cls}`}>            <div className="tp-sidebar-widget mb-45">
                <div className="tp-sidebar-search">
                    <form action="#">
                        <div className="tp-sidebar-search-input">
                            <input type="text" placeholder="Buscar en el blog..." />
                            <button className="tp-sidebar-search-btn">
                                <Search />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* Widget de bienvenida a Hojancha */}
            <div className="tp-sidebar-widget mb-45" style={{
                background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                borderRadius: '15px',
                padding: '25px',
                color: 'white',
                textAlign: 'center'
            }}>
                <h3 style={{ 
                    color: 'white', 
                    marginBottom: '15px',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                }}>
                    🌿 Descubre Hojancha
                </h3>
                <p style={{ 
                    margin: '0', 
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    opacity: '0.95'
                }}>
                    Explora nuestros 5 distritos únicos: Monte Romo, Puerto Carrillo, 
                    Huacas, Matambú y Hojancha Central. ¡175+ años de historia te esperan!
                </p>                <Link 
                    href="/about" 
                    style={{
                        display: 'inline-block',
                        marginTop: '15px',
                        padding: '8px 20px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '20px',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                    }}
                    className="hover:bg-white/30"
                >
                    Conoce más →
                </Link>
            </div>
            
            <div className="tp-sidebar-widget">
                <h3 className="tp-sidebar-widget-title mb-25">Artículos Recientes</h3>                {recent_posts.map((item) => (
                    <div key={item.id} className="tp-sidebar-widget-content tp-sidebar-border">
                        <span className="tp-sidebar-post-cetagory" style={{
                            background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                            color: 'white',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: '600'
                        }}>
                            Lugares de Hojancha
                        </span>
                        <h4 className="tp-sidebar-post-title">
                            <Link href={`/blog-details/${item.id}`} style={{
                                color: '#2E7D32',
                                fontWeight: '600'
                            }}>
                                {item.title}
                            </Link>
                        </h4>
                        <div className="tp-sidebar-post-meta">
                            <span style={{ color: '#666' }}>{item.date}</span>
                            <span className="dvdr"></span>
                            <span style={{ color: '#666' }}>{item.readTime}</span>
                        </div>
                    </div>
                ))}
            </div>            <div className="tp-sidebar-widget pt-20 mb-55">
                <h3 className="tp-sidebar-widget-title mb-30" style={{ color: '#2E7D32', fontWeight: '700' }}>
                    Categorías de Hojancha
                </h3>
                {blogCategoryData.map((item) => (
                    <div key={item.id} className="tp-sidebar-categories-item" style={{
                        marginBottom: '20px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 15px rgba(46, 125, 50, 0.1)',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(46, 125, 50, 0.1)'
                    }}>
                        <div style={{ position: 'relative' }}>
                            <Image 
                                className="tp-sidebar-categories-img" 
                                src={item.imgSrc} 
                                alt={item.title} 
                                width={324} 
                                height={74}
                                style={{
                                    filter: 'brightness(0.85)',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.7), rgba(76, 175, 80, 0.5))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0 20px'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                }}>
                                    {item.title}
                                </h3>
                                <span style={{
                                    background: 'rgba(255,255,255,0.9)',
                                    color: '#2E7D32',
                                    padding: '4px 12px',
                                    borderRadius: '15px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    {item.count} artículos
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>            <div className="tp-sidebar-widget">
                <h3 className="tp-sidebar-widget-title mb-20" style={{ color: '#2E7D32', fontWeight: '700' }}>
                    Temas Populares
                </h3>
                <div className="tp-sidebar-widget-content">
                    <div className="tagcloud">
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Monte Romo</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #1976D2, #42A5F5)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Puerto Carrillo</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #388E3C, #66BB6A)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Ecoturismo</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #F57F17, #FFCC02)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Playas</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #5D4037, #8D6E63)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Huacas</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #689F38, #8BC34A)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Matambú</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #E65100, #FF9800)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Naturaleza</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #7B1FA2, #AB47BC)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Historia</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #00796B, #26A69A)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Cultura</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #C62828, #EF5350)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Aventura</a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #558B2F, #8BC34A)',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            margin: '3px',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            border: 'none'
                        }}>Turismo Rural</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
