import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PhotosComp from './photos';

function PhotosIndexComp() {


    return (
        <>
        <Route path='*' element={<PhotosComp />} />
        </>
    );
}

export default PhotosIndexComp;