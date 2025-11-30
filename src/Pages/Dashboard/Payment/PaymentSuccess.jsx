import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {

    const axiosSecure = useAxiosSecure()

    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id')
    const [paymentInfo, setPaymentInfo] = useState({})
    console.log(sessionId)

    useEffect(() => {
        if(sessionId){
            axiosSecure.patch(`/session-status?session_id=${sessionId}`)
            .then(res => {
                console.log(res.data.trackingId)
                setPaymentInfo({
                    transactionId: res.data.transactionId,
                    trackingId: res.data.trackingId,
                })
            })
        }

    },[sessionId, axiosSecure])
    console.log(paymentInfo)

    return (
        <div>
            <h1 className='text-4xl'>Payment Success</h1>
            <h3>Transaction : {paymentInfo.transactionId}</h3>
            <h3>Tracking : {paymentInfo.trackingId}</h3>
            <Link to="/dashboard/my-percels">Back To MyPercel</Link>
        </div>
    );
};

export default PaymentSuccess;