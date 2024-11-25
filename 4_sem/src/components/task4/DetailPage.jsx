import { useParams } from 'react-router-dom';


function DerailPAge({ list }) {
    const { id } = useParams();
    const item = list.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>Нет содержимого</div>
    }

    return (
        <>
            <h5>{item.title}</h5>
            <p>{item.content}</p>
        </>
    );
}

export default DerailPAge;