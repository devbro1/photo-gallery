import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PinnedPhotoComp from './PinnedPhoto';
import useDelayedState from 'use-delayed-state'
import _ from 'lodash';

function PhotosComp() {
    const [photos, setPhotos] = useState([]);
    const [search,setSearch] = useDelayedState('',5000);

    function buildURL()
    {
        let params = 'offset=0';
        // if(search)
        // {
        //     params += '&description=' + search;
        // }
        return 'https://xoosha.com/ws/1/test.php?' + params;
    }

    useEffect(() => {
        axios.get(buildURL())
            .then(function (response) {
                // handle success
                setPhotos(response.data);
            });
    },[]);

    let photo_comps = [];

    _.forEach(photos,(p) => {
        if(p.description.search(search)>-1)
        {
            photo_comps.push(<PinnedPhotoComp imageSource={p.image_url} name={p.name} description={p.description} />);
        }
        
    });

    return (
        <>
        <div>
            Search: <input type="text" className="border border-2" onChange={(e) => {setSearch(e.target.value)}} />
        </div>
        <div className="flex flex-wrap content-center">{photo_comps}</div>
        </>
    );
}

export default PhotosComp;