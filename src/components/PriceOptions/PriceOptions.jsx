// import PropTypes from 'prop-types';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "FitZone Gym",
            "features": [
                "Modern gym equipment",
                "Personal training sessions",
                "Group fitness classes",
                "Free Wi-Fi"
            ],
            "price": 45.00
        },
        {
            "id": 2,
            "name": "Muscle Up Fitness",
            "features": [
                "State-art weightlifting machines",
                "Yoga and Pilates classes",
                "Indoor cycling studio",
                "Locker room facilities",
                "Access to fitness apps"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "FlexFit Gym",
            "features": [
                "Cardio machines and free weights",
                "Boot camp sessions",
                "TRX suspension training",
                "Showers and changing rooms",
                "Protein shake bar",
                "Online workout tracking"
            ],
            "price": 60.00
        }
    ]


    return (
        <div className="m-12 text-center">
            <h1 className='text-5xl font-bold text-center my-5'>Best Price Options</h1>
            <div className="grid md:grid-cols-3 gap-5">
            {
                priceOptions.map((option)=> <PriceOption key={option.id} option={option} />)
            }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {

};

export default PriceOptions;