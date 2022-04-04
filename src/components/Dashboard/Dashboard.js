import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart,  Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [chartData, setchartData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setchartData(data))
    }, [])

    
    return (
        <div className='all-chart-container'>
            <div className='chart-container'>
                <h2 className='chart-title'>Month wise sell</h2>
                <br />
                <br />
                <div>
                    <LineChart width={500} height={400} data={chartData}>
                        <Line dataKey={'sell'}></Line>
                        <XAxis dataKey="month"></XAxis>
                        <Tooltip />
                        <YAxis></YAxis>
                    </LineChart>
                </div>
            </div>
            <div className='chart-container'>
                <h2 className='chart-title'>Investment vs Revenue</h2>
                <br />
                <br />
                <div>
                    <AreaChart
                        width={500}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </div>
            </div>
            <div className='chart-container'>
                <h2 className='chart-title'>Investment vs Revenue</h2>
                <br />
                <br />
                <div>
                    <BarChart
                        width={500}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;