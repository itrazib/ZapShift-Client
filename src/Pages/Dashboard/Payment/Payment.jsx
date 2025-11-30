import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useParams } from 'react-router';

const Payment = () => {
    const {percelId} = useParams()
    const axiosSecure = useAxiosSecure()
    const {data: percel = [] } = useQuery({
        queryKey:['percel', percelId],
        queryFn:async () => {
            const res = await axiosSecure(`/percel/${percelId}`)
            return res.data
        }
    })
    return (
        <div>
            <h1>Payment Percel : {percel.percelName}</h1>
            <button className='btn btn-primary text-black'>PAY</button>
        </div>
    );
};

export default Payment;