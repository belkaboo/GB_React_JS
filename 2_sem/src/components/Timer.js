import React, { useState, useEffect } from 'react';


function Timer() {
    const [seconds, setSeconds] = useState(0); // Состояние для хранения секунд

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1); // Увеличиваем счётчик
        }, 1000);

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, []); // Эффект выполняется только при первом рендере

    return (
        <>
            <h3>Задание 4</h3>
            <div className='container'>
                <h3>Таймер</h3>
                <p>{seconds}</p>
            </div>
        </>
    );
}

export default Timer;