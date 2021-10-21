import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
   
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const dentalService = details?.find(ds => ds.id == serviceId)

    return (
        <div className='container text-center'>
            <h3>{dentalService?.title}</h3>
            <img src={dentalService?.img} alt="" />
            <p>{dentalService?.description}</p>
        </div>
    );
};

export default ServiceDetail;