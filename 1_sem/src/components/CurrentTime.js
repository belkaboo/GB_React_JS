import React, { useState, useEffect } from 'react';

function CurrentTime() {
    // Состояние для хранения текущего времени
    const [currentTime, setCurrentTime] = useState(new Date().getSeconds());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().getSeconds());
        }, 1000);

        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <p>Текущее время - <span>{currentTime}</span></p>
        </div>
    );
}

export default CurrentTime;