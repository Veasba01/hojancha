'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './game-area.module.css';

// Importar las imágenes de Hojancha que ya tenemos
import puerto_carrillo from "@/assets/img/gellary/hojancha/Puerto Carrillo editada (1).png";
import matambu from "@/assets/img/gellary/hojancha/Matambu 3-2-3 (1).jpg";
import hojancha_vista from "@/assets/img/gellary/hojancha/img_20171027_153533.jpg";
import monte_romo from "@/assets/img/gellary/hojancha/DMonte Romo Modificado (1).png";

const gameData = [
    {
        id: 1,
        district: "Puerto Carrillo",
        image: puerto_carrillo,
        question: "¿Cuál es la principal atracción de Puerto Carrillo?",
        options: ["Montañas", "Playa", "Café", "Volcanes"],
        correct: 1,
        fact: "Puerto Carrillo es famoso por sus hermosas playas en el Pacífico costarricense."
    },
    {
        id: 2,
        district: "Monte Romo",
        image: monte_romo,
        question: "¿Qué caracteriza principalmente a Monte Romo?",
        options: ["Playas", "Paisajes montañosos", "Ríos", "Desiertos"],
        correct: 1,
        fact: "Monte Romo se destaca por sus impresionantes paisajes montañosos y vistas panorámicas."
    },
    {
        id: 3,
        district: "Matambú",
        image: matambu,
        question: "¿Cuántos distritos tiene el cantón de Hojancha?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        fact: "Hojancha tiene 5 distritos: Hojancha Central, Monte Romo, Huacas, Matambú y Puerto Carrillo."
    },
    {
        id: 4,
        district: "Hojancha Central",
        image: hojancha_vista,
        question: "¿En qué año fue fundado Hojancha?",
        options: ["1840", "1848", "1855", "1860"],
        correct: 1,
        fact: "Hojancha fue fundado en 1848, con más de 175 años de historia costarricense."
    }
];

export default function GameArea() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [gameCompleted, setGameCompleted] = useState(false);
    const [showFact, setShowFact] = useState(false);

    const handleAnswer = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        setShowResult(true);
        
        if (answerIndex === gameData[currentQuestion].correct) {
            setScore(score + 1);
        }
        
        setTimeout(() => {
            setShowFact(true);
        }, 1000);
    };

    const nextQuestion = () => {
        if (currentQuestion < gameData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            setShowFact(false);
        } else {
            setGameCompleted(true);
        }
    };

    const resetGame = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowResult(false);
        setGameCompleted(false);
        setShowFact(false);
    };

    const currentData = gameData[currentQuestion];

    if (gameCompleted) {
        const percentage = (score / gameData.length) * 100;
        let message = "";
        if (percentage >= 75) message = "¡Excelente! Eres un experto en Hojancha 🎉";
        else if (percentage >= 50) message = "¡Muy bien! Conoces bastante sobre Hojancha 👍";
        else message = "¡Sigue aprendiendo sobre la belleza de Hojancha! 📚";

        return (
            <div className="tp-game-area pt-120 pb-95">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className={`${styles.gameCompleted} text-center`}>
                                <h2 className="tp-section-title mb-30">¡Juego Completado!</h2>
                                <div className={styles.scoreDisplay}>
                                    <h3 className="mb-20">Tu puntuación: {score}/{gameData.length}</h3>
                                    <div className={styles.progressBar}>
                                        <div 
                                            className={styles.progressFill} 
                                            style={{width: `${percentage}%`}}
                                        ></div>
                                    </div>
                                    <p className="mt-20 mb-30">{message}</p>
                                </div>
                                <button 
                                    className="tp-btn-sm"
                                    onClick={resetGame}
                                >
                                    Jugar de Nuevo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="tp-game-area pt-120 pb-95">
            <div className="container">
                {/* Título y progreso */}
                <div className="row">
                    <div className="col-12">
                        <div className="tp-section-title-wrap text-center mb-60">
                            <h2 className="tp-section-title mb-20">Descubre Hojancha</h2>
                            <p className="tp-section-title-desc">Aprende sobre nuestros distritos jugando</p>
                            <div className={styles.gameProgress}>
                                Pregunta {currentQuestion + 1} de {gameData.length}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Área del juego */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className={styles.gameCard}>
                            {/* Imagen del distrito */}
                            <div className={styles.districtImage}>
                                <Image
                                    src={currentData.image}
                                    alt={currentData.district}
                                    width={600}
                                    height={300}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                        borderRadius: '12px'
                                    }}
                                />
                                <div className={styles.districtName}>
                                    <h3>{currentData.district}</h3>
                                </div>
                            </div>

                            {/* Pregunta */}
                            <div className={styles.questionArea}>
                                <h4 className="mb-30">{currentData.question}</h4>
                                
                                {/* Opciones */}
                                <div className={styles.optionsGrid}>
                                    {currentData.options.map((option, index) => {
                                        let buttonClass = styles.optionButton;
                                        
                                        if (showResult && selectedAnswer !== null) {
                                            if (index === currentData.correct) {
                                                buttonClass += ` ${styles.correct}`;
                                            } else if (index === selectedAnswer && index !== currentData.correct) {
                                                buttonClass += ` ${styles.incorrect}`;
                                            }
                                        }

                                        return (
                                            <button
                                                key={index}
                                                className={buttonClass}
                                                onClick={() => handleAnswer(index)}
                                                disabled={showResult}
                                            >
                                                {option}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Dato curioso */}
                                {showFact && (
                                    <div className={styles.factBox}>
                                        <h5>💡 ¿Sabías que...?</h5>
                                        <p>{currentData.fact}</p>
                                        <button 
                                            className="tp-btn-sm mt-20"
                                            onClick={nextQuestion}
                                        >
                                            {currentQuestion < gameData.length - 1 ? 'Siguiente' : 'Ver Resultados'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
