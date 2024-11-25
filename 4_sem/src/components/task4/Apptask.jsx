import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './DetailPage';
import ListPage from './ListPage';




function Apptask({ list }) {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/list/:id' element={<DetailPage list={list} />} />
                    <Route path='*' element={<ListPage list={list} />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Apptask;