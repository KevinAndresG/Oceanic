import { Flights } from "../FlightsInfo/Flights";
import "./Home.scss";
import { Payments } from "../Paymantes/Payments";
import { Available } from "../AvailableServices/Available";

export const Home = () => {
    return (
        <div className="home">
            <Flights />
            <Payments />
            <Available />
        </div>
    );
};
