import React, { useState, useEffect } from 'react';

function CurrentTime() {
    // Состояние для хранения текущего времени
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // Устанавливаем интервал обновления времени каждую секунду
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
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