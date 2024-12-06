import React, { useState, useEffect } from "react";
import InfoLogement from '../../component/InfoLogement/infoLogement';

import logementsData from '../../datas/logements.json';

function Logement() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        setLogements(logementsData);  
    }, []); 

    return (
        <InfoLogement logements={logements} />
    );
}

export default Logement;