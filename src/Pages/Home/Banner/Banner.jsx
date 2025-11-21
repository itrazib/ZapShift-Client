import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerimg1 from '../../../assets/banner/banner1.png'
import bannerimg2 from '../../../assets/banner/banner2.png'
import bannerimg3 from '../../../assets/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
         <Carousel className='my-10' infiniteLoop={true} autoPlay={true} stopOnHover={true} showIndicators={true} showStatus={false} showThumbs={false}>
                <div>
                    <img src={bannerimg1} />
                    
                </div>
                <div>
                    <img src={bannerimg2} />
                   
                </div>
                <div>
                    <img src={bannerimg3}/>
                    
                </div>
            </Carousel>
    );
};

export default Banner;