import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    // AOS.init({
    //     duration: 1000,
    //     delay: 500,
    //     useClassNames: true,
    // });
    return (
        <div id='Torch' className='container about'>
            <div className='col-12 col-md-6 col-lg-6' data-aos="fade-down">
                <img src="./images/about.png" width="100%" alt="" />
            </div>

            <div className="col-12 col-md-6 col-lg-6 ps-3 mt-5 mt-md-5 mt-lg-0" data-aos="flip-left">
                <h4 className="main_head mb-4 d-flex align-items-center"><img width="15px" className='me-2' src="./images/dot.png" alt="" /> THE LEGEND OF THE WORRY MONSTERS</h4>
                <p className='support_para ms-2' style={{ fontSize: "14px" }}>The worry dimension came to me known as the Worriverse. Every time a person feels anxious, the dimension grows and becomes more like a confusing maze of worried thought. Luckily, at the same time, a new monster is born, as unique as the person's worry. It proceeds through the maze and into the material world with a mission to help people feel better. Worry Monsters are cute and a little mean, but they'll always do their best. All you need to do is tell them what's troubling you.</p>
                <hr style={{ width: "50%", color: "green", height: "5px", borderRadius: "15px" }} />
                <p className='support_para ms-2' style={{ fontSize: "14px" }}>Their unique head decorations help them sense worry, communicate with each other and tell each other apart. Their body shape gives you an impression of how they deal with problems.</p>
            </div>
        </div>
    )
}

export default About