function Greeting() {

    const time = new Date().getHours();
    let greeting;

    switch (true) {
        case (time >= 5 && time < 12):
            greeting = "Доброе утро";
            break;
        case (time >= 12 && time < 18):
            greeting = "Добрый день";
            break;
        default:
            greeting = "Добрый вечер";
            break;
    }

    return (
        <div className='greeting'>
            <h3>{greeting}</h3>
        </div>
    );
}

export default Greeting;