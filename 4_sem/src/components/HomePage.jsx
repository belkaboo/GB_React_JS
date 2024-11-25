import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h3>Главная страница</h3>
            <Link to='/about'
                className='link'>
                О нас
            </Link>

        </>
    );
}

export default HomePage;