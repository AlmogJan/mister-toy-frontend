import { useEffect } from "react"
import { useNavigate } from "react-router"
export function ToyPreview({ toy }) {
    useEffect(() => {
        console.log(toy)
    }, [])
    const navigate = useNavigate()
    return <div onClick={() => navigate(`/toy/${toy.id}`)}>
        <h1>🧸</h1>
        <h3 className="name">{toy.name}</h3>
        <h5 className="price">{toy.price}$</h5>
        {toy.inStock ? (<p className="in-stock">in stock</p>) : (<p>not in stock</p>)}
    </div>
}