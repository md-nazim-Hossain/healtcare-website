import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {details} = useParams();
    
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[]);

    return (
        <div>
            {details}
        </div>
    );
};

export default ServiceDetails;