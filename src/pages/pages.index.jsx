import { Navigate, Route, Routes } from 'react-router-dom';
import PhotosComp from './photos/photos';
import PhotosIndexComp from './photos/photos.index';

function PagesComp() {

    return (
        <Routes>
            <Route path='/photos/*' children={PhotosIndexComp()} />
            <Route path="*" element={<Navigate to="/photos" />} />
        </Routes>
    );
}

export default PagesComp;