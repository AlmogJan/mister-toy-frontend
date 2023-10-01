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
                    'rgba(255,218,239, 0.2)',
                    'rgba(211,232,202, 0.2)',
                    'rgba(203,220,239, 0.2)',
                    'rgba(255,247,251, 0.2)',
                    'rgba(237,245,233, 0.2)',
                    'rgba(223,234,245, 0.2)',
                    'rgba(255,254,201, 0.2)',
                    'rgba(255,254,222, 0.2)',
                ],
                borderColor: [
                    'rgba(204,174,191, 1)',
                    'rgba(189,208,181, 1)',
                    'rgba(182,198,215, 1)',
                    'rgba(255,218,239, 1)',
                    'rgba(211,232,202, 1)',
                    'rgba(223,234,245, 1)',
                    'rgba(229,228,199, 1)',
                    'rgba(229,228,199, 1)',
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
