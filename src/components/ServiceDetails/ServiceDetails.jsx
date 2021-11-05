import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';

const ServiceDetails = () => {
    const {useService} = useFetch();
    const {details} = useParams();
    const services = useService();
    console.log(services);
    return (
        <div>
            {details}
        </div>
    );
};

export default ServiceDetails;