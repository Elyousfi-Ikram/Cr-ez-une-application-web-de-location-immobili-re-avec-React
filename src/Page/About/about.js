import React from "react";
import Collapse from '../../component/Collapse/collapse.js';
import imgHeaderAbout from '../../Assets/img-header-about.png'
import '../header.scss'


function About() {
    return (
        <div>
            <div>
                <div className='header-about'>
                    <img src={imgHeaderAbout} alt='' className='img-header' />
                </div>
                <Collapse type="about" />
            </div>
        </div>
    );
}

export default About;