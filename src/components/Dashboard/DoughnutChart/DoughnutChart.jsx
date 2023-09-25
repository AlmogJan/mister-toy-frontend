import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { labels as Labels } from "../../../consts.js"
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ toys }) {
    const [data, setData] = useState({
        labels: Object.values(Labels),
        datasets: [
            {
                label: '# of Toys',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(252, 99, 132, 0.2)',
                    'rgba(54, 162, 239, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(252, 99, 132, 1)',
                    'rgba(54, 162, 239, 1)',
                ],
                borderWidth: 1,
            },
        ],
    })

    useEffect(() => {
        setData(prevData => {
            const newDatasets = [...prevData.datasets];
            newDatasets[0] = { ...newDatasets[0], data: getToyLabelsCount() }
            return {
                ...prevData,
                datasets: newDatasets
            }
        })
    }, [toys])

    function getToyLabelsCount() {
        const res = toys.map(toy => toy.labels).reduce((prev, curr) => ([...prev, ...curr]), [])
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
        return Object.values(Labels).map(label => res[label]);


    }
    return <Doughnut style={{ width: "400px", height: "400px" }} data={data} />;
}
