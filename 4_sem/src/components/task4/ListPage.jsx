import { Link } from 'react-router-dom';

function ListPage({ list }) {
    return (
        <>
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        <Link to={`list/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>

    );
}

export default ListPage;