import React from "react";
import { useLocation } from "react-router";
import Getposition from "../../MapLoader/getPosition";

const TSub_B = () => {
    const location = useLocation();

    return (
        <fieldset id="yourMap">
            <legend className="MapLegend">Position : </legend>
            <div className="map-container">
                <Getposition state={{location}}/>
            </div>
        </fieldset>
    )
}

export default TSub_B;