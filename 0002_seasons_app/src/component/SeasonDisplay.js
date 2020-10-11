import React from "react";
import {SNOW_ICON, SUMMER, SUN_ICON, WINTER} from "../common/env";
// css
import '../css/SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: SUN_ICON
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: SNOW_ICON
    }
}

const getSeason = (lat, month) => {
    // kuzey yarım küre
    if (month > 2 && month < 9) {
        return lat > 0 ? SUMMER : WINTER;
    } else {
        return lat > 0 ? WINTER : SUMMER;
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]; // return {text, iconName}

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay;