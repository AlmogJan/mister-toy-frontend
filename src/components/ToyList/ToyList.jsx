import { Link } from "react-router-dom"
import { ToyPreview } from "../../components/ToyPreview/ToyPreview.jsx"
import { useSelector } from "react-redux"
import { useEffect } from "react";

export function ToyList({ toys, onToyRemove }) {
    const sortBy = useSelector((state) => state.toyModule.filterBy.sort);
    const search = useSelector((state) => state.toyModule.filterBy.search);
    const inStock = useSelector((state) => state.toyModule.filterBy.inStock)
    const labelsFilter = useSelector((state) => state.toyModule.filterBy.labels)
    function sortByCreatedAt(a, b, numeralDirection) {
        return (new Date(a.createdAt) - new Date(b.createdAt)) * numeralDirection
    }

    function resolveSort() {
        const { value, direction } = sortBy;
        const numeralDirection = direction === "asc" ? 1 : -1
        if (value === "createdAt" || value === "default") {
            return (a, b) => sortByCreatedAt(a, b, numeralDirection);
        }
        if (value === "price") {
            return (a, b) => (a.price - b.price) * numeralDirection
        }
        if (value === "name") {
            return (a, b) => (a.name.localeCompare(b.name)) * numeralDirection
        }

    }

    return <ul className="toy-list clean-list">
        {toys.filter((toy) => labelsFilter.length < 1 || toy.labels.some(label => labelsFilter.includes(label))).filter((toy) => inStock === "all" || inStock === "inStock" ? toy.inStock : !toy.inStock).filter((toy) => toy.name.toLowerCase().includes(search.toLowerCase())).sort(resolveSort()).map((toy, idx) =>
            <li key={idx}>
                <ToyPreview toy={toy}></ToyPreview>
                <button onClick={() => onToyRemove(toy.id)}>Delete</button>
                <button><Link to={`/toy/edit/${toy.id}`}>Edit</Link></button>
            </li>
        )
        }
    </ul >
}