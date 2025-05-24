import Link from "next/link";

export default function BlogCategory() {
    return (
        <div className="tp-post-cetagory pb-50" style={{
            background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05), rgba(76, 175, 80, 0.03))'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-post-cetagory-list">
                            <ul>
                                <li className="active" style={{
                                    background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                                    color: 'white',
                                    padding: '12px 25px',
                                    borderRadius: '25px',
                                    fontWeight: '600',
                                    boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)'
                                }}>
                                    Todos los Temas
                                </li>
                                <li>
                                    <Link href="/blog-grid" style={{
                                        background: 'rgba(46, 125, 50, 0.1)',
                                        color: '#2E7D32',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid transparent'
                                    }} 
                                    className="hover:bg-green-100 hover:border-green-300">
                                        Historia y Cultura
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid" style={{
                                        background: 'rgba(46, 125, 50, 0.1)',
                                        color: '#2E7D32',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid transparent'
                                    }}
                                    className="hover:bg-green-100 hover:border-green-300">
                                        Ecoturismo
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid" style={{
                                        background: 'rgba(46, 125, 50, 0.1)',
                                        color: '#2E7D32',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid transparent'
                                    }}
                                    className="hover:bg-green-100 hover:border-green-300">
                                        Naturaleza
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid" style={{
                                        background: 'rgba(46, 125, 50, 0.1)',
                                        color: '#2E7D32',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid transparent'
                                    }}
                                    className="hover:bg-green-100 hover:border-green-300">
                                        Aventura
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-grid" style={{
                                        background: 'rgba(46, 125, 50, 0.1)',
                                        color: '#2E7D32',
                                        padding: '12px 25px',
                                        borderRadius: '25px',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid transparent'
                                    }}
                                    className="hover:bg-green-100 hover:border-green-300">
                                        Gastronomía
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
