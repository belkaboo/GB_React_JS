export default function MessageList({ messages }) {

    return (
        <>
            <h3>Список сообщений</h3>
            <ul>
                {messages.map((message) =>
                    <li key={message.id}>{message.text}</li>
                )}
            </ul>
        </>
    );
};
