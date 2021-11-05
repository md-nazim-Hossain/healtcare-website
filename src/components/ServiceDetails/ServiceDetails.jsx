import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [singleService,setSingleService] = useState([]);
    const {details} = useParams();

    useEffect(() =>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setSingleService(data));
    },[])
    
    return (
        <div>
            {
                singleService.map(data =><div>{data.id}</div>)
            }
        </div>
    );
};

export default ServiceDetails;