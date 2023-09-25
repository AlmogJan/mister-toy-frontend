import { useEffect } from "react";
import { DoughnutChart } from "../../components/Dashboard/DoughnutChart/DoughnutChart";
import { LineChart } from "../../components/Dashboard/LineChart/LineChart";
import { useSelector } from "react-redux"
import { loadToys } from "../../store/actions/toy.actions";


export function Dashboard() {
    const toys = useSelector((state) => state.toyModule.toys)
    useEffect(() => {
        loadToys().catch((err) => console.error(err))
    }, [])
    return <div>
        <DoughnutChart toys={toys}></DoughnutChart>
        <LineChart toys={toys}></LineChart>
    </div>
}