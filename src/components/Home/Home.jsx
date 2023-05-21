import React, { useState } from "react";
import { Flights } from "../FlightsInfo/Flights";
import "./Home.scss";
import { Payments } from "../Paymantes/Payments";
import { Available } from "../AvailableServices/Available";
import { Place } from "../DepartureDestination/Place";

export const Home = () => {
    return (
        <div className="home">
            <Flights />
            <Payments />
            <Available />
        </div>
    );
};
