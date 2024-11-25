

function List({ render }) {

    return (
        <ul style={{ padding: '0', listStyle: 'none' }}>
            {render()}
        </ul>
    );
}

export default List;

