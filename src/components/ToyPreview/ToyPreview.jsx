import { useEffect } from "react"
import { useNavigate } from "react-router"
export function ToyPreview({ toy }) {
    useEffect(() => {
        console.log(toy)
    }, [])
    const navigate = useNavigate()
    return <div onClick={() => navigate(`/toy/${toy.id}`)}>
        <h3>{toy.name}</h3>
        <h5>{toy.price}$</h5>
        {toy.inStock ? (<p>in stock</p>) : (<p>not in stock</p>)}
    </div>
}