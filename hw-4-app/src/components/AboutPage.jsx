
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <>
            <h1>О нас</h1>
            <Link
                to='/'
                className='App-link'
            >
                Вернуться на главную
            </Link>
        </>
    );
}

export default AboutPage;


