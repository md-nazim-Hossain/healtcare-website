import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {details} = useParams();
    
    return (
        <div>
            {details}
        </div>
    );
};

export default ServiceDetails;