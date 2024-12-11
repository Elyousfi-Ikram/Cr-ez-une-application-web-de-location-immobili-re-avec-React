import React from "react";

import Collapse from '../../component/collapse/collapse';
import Banner from '../../component/banner/banner';

import './about.scss';

import data from '../../datas/about.json';

import img from '../..//Assets/img-banner-about.png';

function About() {
    return (
        <div>
            <Banner text={''} img={img} />
            <div className="collapse-about">
                {data.map((item) => (
                    <Collapse title={item.title} content={item.content} key={item.title} />
                ))}
            </div>
        </div>
    );
}

export default About;
