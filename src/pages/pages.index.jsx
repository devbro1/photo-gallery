import { Navigate, Route, Routes } from 'react-router-dom';
import PhotosComp from './photos/photos';

function PagesComp() {

    return (
        <Routes>
            <Route path='/photos/*' element={<PhotosComp />} />
            <Route path="*" element={<Navigate to="/photos" />} />
        </Routes>
    );
}

export default PagesComp;