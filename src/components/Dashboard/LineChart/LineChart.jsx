import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function LineChart({ toys }) {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Added At',
            },
        },
    };

    const [data, setData] = useState({
        labels,
        datasets: [
            {
                label: 'Added At',
                data: [],
                borderColor: 'rgb(255,218,239)',
                backgroundColor: 'rgba(255,218,239, 0.5)',
            }
        ],
    })

    useEffect(() => { console.log(data); }, [data])

    useEffect(() => {
        setData(prevData => {
            const newDatasets = [...prevData.datasets];
            newDatasets[0] = { ...newDatasets[0], data: getToyMonthCount() }
            return {
                ...prevData,
                datasets: newDatasets
            }
        })
    }, [toys])

    function getToyMonthCount() {
        const res = toys.map(toy => labels[new Date(toy.createdAt).getMonth()])
            .reduce((prev, curr) => {
                const newValue = { ...prev };
                if (newValue[curr]) {
                    newValue[curr]++;
                }
                else {
                    newValue[curr] = 1;
                }
                return { ...newValue };
            }, {});
        return labels.map(label => res[label] || 0);


    }
    return <Line options={options} data={data} />;
}
