import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h1 className='text-4xl'>Payment Cancelled try again later!</h1>
            <Link to="/dashboard/my-percels">Back</Link>
        </div>
    );
};

export default PaymentCancelled;