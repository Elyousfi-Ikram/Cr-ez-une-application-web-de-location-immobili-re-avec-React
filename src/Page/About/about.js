import React from "react";

import Collapse from '../../component/Collapse/collapse.js';
import Banner from '../../component/Banner/banner.js';
import data from '../../datas/about.json';

import './about.scss';

function About() {
    return (
        <div>
            <Banner type="banner-about" />
            <div className="collapse-about">
                {data.map((item) => (
                    <Collapse title={item.title} content={item.content} key={item.title} />
                ))}
            </div>
        </div>
    );
}

export default About;
