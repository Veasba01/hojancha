'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './game-area.module.css';
import { gameData } from "./game-questions";

export default function GameArea() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [gameCompleted, setGameCompleted] = useState(false);
    const [showFact, setShowFact] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);
    const [gameStarted, setGameStarted] = useState(false);

    // Timer effect
    useEffect(() => {
        if (!gameStarted || showResult || gameCompleted) return;

        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            // Tiempo agotado, mostrar respuesta correcta
            handleTimeUp();
        }
    }, [timeLeft, gameStarted, showResult, gameCompleted]);

    const handleTimeUp = () => {
        setSelectedAnswer(null);
        setShowResult(true);
        setTimeout(() => {
            setShowFact(true);
        }, 1000);
    };

    const startGame = () => {
        setGameStarted(true);
        setTimeLeft(20);
    };

    const handleAnswer = (answerIndex: number) => {
        if (showResult) return;
        
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
            setTimeLeft(20);
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
        setTimeLeft(20);
        setGameStarted(false);
    };

    const currentData = gameData[currentQuestion];

    // Pantalla de inicio
    if (!gameStarted) {
        return (
            <div className={styles.kahootContainer}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className={styles.welcomeScreen}>
                                <div className={styles.gameIcon}>🎮</div>
                                <h1 className={styles.gameTitle}>¡Descubre Hojancha!</h1>
                                <p className={styles.gameSubtitle}>
                                    Un juego súper divertido para aprender sobre los 5 distritos de Hojancha
                                </p>
                                <div className={styles.gameInfo}>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>📝</span>
                                        <span>{gameData.length} preguntas</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>⏱️</span>
                                        <span>20 segundos por pregunta</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoIcon}>🏆</span>
                                        <span>¡Gana puntos y aprende!</span>
                                    </div>
                                </div>
                                <button 
                                    className={styles.startButton}
                                    onClick={startGame}
                                >
                                    ¡Empezar a Jugar! 🚀
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Pantalla de resultados finales
    if (gameCompleted) {
        const percentage = (score / gameData.length) * 100;
        let message = "";
        let emoji = "";
        
        if (percentage >= 80) {
            message = "¡Increíble! Eres un súper explorador de Hojancha";
            emoji = "🏆";
        } else if (percentage >= 60) {
            message = "¡Muy bien! Conoces bastante sobre Hojancha";
            emoji = "⭐";
        } else if (percentage >= 40) {
            message = "¡Buen trabajo! Sigues aprendiendo sobre Hojancha";
            emoji = "👍";
        } else {
            message = "¡Sigue explorando! Hay mucho más que descubrir";
            emoji = "🌟";
        }

        return (
            <div className={styles.kahootContainer}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className={styles.resultsScreen}>
                                <div className={styles.resultsIcon}>{emoji}</div>
                                <h1 className={styles.resultsTitle}>¡Juego Completado!</h1>
                                <div className={styles.scoreCard}>
                                    <div className={styles.finalScore}>
                                        {score}/{gameData.length}
                                    </div>
                                    <div className={styles.scoreText}>respuestas correctas</div>
                                    <div className={styles.progressBarFinal}>
                                        <div 
                                            className={styles.progressFillFinal} 
                                            style={{width: `${percentage}%`}}
                                        ></div>
                                    </div>
                                    <p className={styles.resultMessage}>{message}</p>
                                </div>
                                <button 
                                    className={styles.playAgainButton}
                                    onClick={resetGame}
                                >
                                    ¡Jugar de Nuevo! 🎮
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Pantalla principal del juego
    return (
        <div className={styles.kahootContainer}>
            <div className="container-fluid">
                {/* Header del juego */}
                <div className={styles.gameHeader}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <div className={styles.questionCounter}>
                                    Pregunta {currentQuestion + 1} de {gameData.length}
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className={styles.timer}>
                                    <div className={styles.timerCircle}>
                                        <span className={styles.timerText}>{timeLeft}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-end">
                                <div className={styles.scoreDisplay}>
                                    Puntos: {score}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Área de la pregunta */}
                <div className={styles.questionSection}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                {/* Imagen */}
                                <div className={styles.questionImage}>
                                    <Image
                                        src={currentData.image}
                                        alt={currentData.district}
                                        width={800}
                                        height={400}
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                            objectFit: 'cover',
                                            borderRadius: '20px'
                                        }}
                                    />
                                    <div className={styles.districtBadge}>
                                        {currentData.district}
                                    </div>
                                </div>

                                {/* Pregunta */}
                                <div className={styles.questionText}>
                                    <h2>{currentData.question}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Área de respuestas */}
                <div className={styles.answersSection}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className={styles.answersGrid}>
                                    {currentData.options.map((option, index) => {
                                        const colors = ['red', 'blue', 'yellow', 'green'];
                                        const shapes = ['🔺', '🔷', '⬥', '⭕'];
                                        
                                        let buttonClass = `${styles.answerButton} ${styles[colors[index]]}`;
                                        
                                        if (showResult && selectedAnswer !== null) {
                                            if (index === currentData.correct) {
                                                buttonClass += ` ${styles.correct}`;
                                            } else if (index === selectedAnswer && index !== currentData.correct) {
                                                buttonClass += ` ${styles.incorrect}`;
                                            } else {
                                                buttonClass += ` ${styles.disabled}`;
                                            }
                                        }

                                        return (
                                            <button
                                                key={index}
                                                className={buttonClass}
                                                onClick={() => handleAnswer(index)}
                                                disabled={showResult}
                                            >
                                                <div className={styles.answerShape}>
                                                    {shapes[index]}
                                                </div>
                                                <div className={styles.answerText}>
                                                    {option}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dato curioso */}
                {showFact && (
                    <div className={styles.factSection}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className={styles.factCard}>
                                        <div className={styles.factIcon}>💡</div>
                                        <h3>¡Dato Curioso!</h3>
                                        <p>{currentData.fact}</p>
                                        <button 
                                            className={styles.nextButton}
                                            onClick={nextQuestion}
                                        >
                                            {currentQuestion < gameData.length - 1 ? 'Siguiente Pregunta 👉' : 'Ver Resultados 🏆'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
