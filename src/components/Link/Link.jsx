import PropTypes from 'prop-types';

const Link = ({ route }) => {
    console.log(route)
    return (
        <li className='hover:bg-sky-200 p-2 rounded-lg '> <a href={route.path} > {route.name} </a> </li>
    );
};

Link.propTypes = {
    route: PropTypes.array
};

export default Link;