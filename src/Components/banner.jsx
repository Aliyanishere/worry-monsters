import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    // AOS.init({
    //     duration: 1000,
    //     delay: 500,
    //     useClassNames: true,
    // });
    return (
        <div>
            <section className="main container">
                <div className="child col-12 col-md-5 col-lg-5 px-3 mt-0">
                    <h1 className="main_head mb-4" data-aos="fade-down">The Worry Monster Project</h1>
                    <p className='support_para' data-aos="fade-left">Turning NFTs into quality sleep and anxiety relief. We are changing the way everyone maintains mind/body health and relief from WORRY!</p>
                    <div className='banner_btns mt-3 mb-4' data-aos="flip-left">
                        <button className='start_now me-0 me-lg-3 me-md-3 mb-2 mb-lg-0'>Start Now</button>
                        <p className='mb-0 fs-5' style={{ color: "black" }}>or</p>
                        <button className='read_more ms-0 ms-lg-3 ms-md-3 mt-2 mt-lg-0'>Read More</button>
                    </div>
                </div>
                <div className='col-12 col-md-7 col-lg-7' data-aos="fade-down-left">
                    <img src="./images/banner.png" width="100%" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Banner