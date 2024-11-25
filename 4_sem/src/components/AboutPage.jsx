import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <>
            <h3>О нас</h3>
            <Link to='/'
                className='link'
            >
                Главная страница
            </Link>
        </>
    );
}

export default AboutPage;