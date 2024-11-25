import { Children } from "react";


function Box({ children }) {

    const styles = {
        border: '1px solid white',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#282c34',
    }

    return (
        <div style={styles}>{children} </div>
    );
}

export default Box;