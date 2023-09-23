import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toyService } from "../../services/toy.service.js";

export function ToyDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [currToy, setCurrToy] = useState(null);
    useEffect(() => {
        const { toyId } = params;
        toyService
            .get(toyId)
            .then((toy) => {
                if (!toy) return navigate("/toy");
                setCurrToy(toy);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        console.log(currToy)
    }, [currToy])
    if (!currToy) return <div>loading...</div>;
    const { name, price, createdAt, labels, inStock } = currToy
    return (
        <div>
            <h3>{name}</h3>
            <h5>{price}$</h5>
            <p>{new Date(createdAt).toDateString()}</p>
            <p>{labels.join(", ")}</p>
            {inStock ? (<p>in stock</p>) : (<p>not in stock</p>)}
            <button onClick={() => navigate('/toy')}>back</button >
        </div>
    )
}