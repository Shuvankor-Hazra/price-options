import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className='bg-sky-300 p-7 mt-5 rounded-xl font-bold space-y-5 flex flex-col'>
            <h2>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-4xl pb-5'> {name} </h4>
            <div className='flex-grow space-y-2'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature} />)
            }
            </div>
            <div className=''>
            <button className='btn btn-outline text-xl w-full font-bold'>Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;