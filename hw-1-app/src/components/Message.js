import React from 'react';
import './Message.css'; // Импортируем стили

function Message({ text }) {
    return <div className="message">
        <p>{text}</p></div>;
}

export default Message;