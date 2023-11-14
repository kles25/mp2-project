import React from "react";
import "./charts.css"
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Monday",
        "Study time": 6200,
    },
    {
        name: "Tuesday",
        "Study time": 1500,
    },
    {
        name: "Wednesday",
        "Study time": 7500,
    },
    {
        name: "Thursday",
        "Study time": 3240,
    },
    {
        name: "Friday",
        "Study time": 7140,
    }
];

function Charts() {
    return (
        <div>
            <h3 className="db-title">Weekly Progress</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#094067" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Study time" stroke="#90b4ce" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Charts;
