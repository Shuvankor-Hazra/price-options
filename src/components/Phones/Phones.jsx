// import PropTypes from 'prop-types';
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { FidgetSpinner } from 'react-loader-spinner';

const Phones = () => {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then((res) => res.json())
        //     .then((data) => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then((data) => {
                const phonesData = data.data.data
                const phonesWithFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {loading && <div>
                render(<FidgetSpinner
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper"
                />)

            </div>}

            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <div className='flex justify-center'>
                <BarChart width={1200} height={400} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey={'name'} />
                    <YAxis />
                </BarChart>
            </div>
        </div>
    );
};

Phones.propTypes = {

};

export default Phones;