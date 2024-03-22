// import PropTypes from 'prop-types';
import { CartesianGrid, LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        {
            id: 1,
            name: "Student 1",
            mathMarks: 85,
            physicsMarks: 78,
            chemistryMarks: 82
        },
        {
            id: 2,
            name: "Student 2",
            mathMarks: 70,
            physicsMarks: 65,
            chemistryMarks: 72
        },
        {
            id: 3,
            name: "Student 3",
            mathMarks: 90,
            physicsMarks: 85,
            chemistryMarks: 88
        },
        {
            id: 4,
            name: "Student 4",
            mathMarks: 65,
            physicsMarks: 60,
            chemistryMarks: 68
        },
        {
            id: 5,
            name: "Student 5",
            mathMarks: 75,
            physicsMarks: 70,
            chemistryMarks: 78
        },
        {
            id: 6,
            name: "Student 6",
            mathMarks: 80,
            physicsMarks: 75,
            chemistryMarks: 82
        },
        {
            id: 7,
            name: "Student 7",
            mathMarks: 95,
            physicsMarks: 90,
            chemistryMarks: 92
        },
        {
            id: 8,
            name: "Student 8",
            mathMarks: 60,
            physicsMarks: 55,
            chemistryMarks: 58
        },
        {
            id: 9,
            name: "Student 9",
            mathMarks: 88,
            physicsMarks: 82,
            chemistryMarks: 85
        },
        {
            id: 10,
            name: "Student 10",
            mathMarks: 72,
            physicsMarks: 68,
            chemistryMarks: 75
        }
    ];




    return (
        <div className='flex justify-center'>
            <LChart width={1400} height={400} data={studentData} >
                <Line type="monotone" dataKey="mathMarks" stroke="Blue"></Line>
                <Line type="monotone" dataKey="physicsMarks" stroke="red"></Line>
                <Line type="monotone" dataKey="chemistryMarks" stroke="green"></Line>
                <CartesianGrid stroke="#ccc" strokeDasharray="10 10" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

            </LChart>
        </div>
    );
};

LineChart.propTypes = {

};

export default LineChart;