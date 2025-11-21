import React from 'react';
import Banner from '../Banner/Banner';
import Works from '../Works/Works';
import OurServices from '../OurServices/OurServices';
import SelesTeam from '../SalesTeam/SelesTeam';
import Supports from '../Support/Supports';
import Reviews from '../Reviews/Reviews';

const reviewPromise = fetch('../../../../public/reviews.json')
.then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <OurServices></OurServices>
            <SelesTeam></SelesTeam>
            <Supports></Supports>
            <Reviews reviewPromise = {reviewPromise}></Reviews>
        </div>
    );
};

export default Home;