import React, { useState, useEffect } from 'react';

function PinnedPhotoComp(props) {

    return (
        <div class="w-36 p-2">
            <img class="max-w-32" alt={props.name} src={props.imageSource} />
        </div>
    );
}

export default PinnedPhotoComp;