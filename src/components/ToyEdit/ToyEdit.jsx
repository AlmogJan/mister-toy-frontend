import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toyService } from "../../services/toy.service";
import { updateToy } from "../../store/actions/toy.actions";

import { ToyAdd } from "../ToyAdd/ToyAdd";
export function ToyEdit() {
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
                console.error(err);
            });
    }, []);
    function onToyEdit(toy) {
        toy.id = currToy.id
        toyService.save(toy, true).then(() => navigate(-1))
    }
    if (!currToy) return <div>loading...</div>;
    return <div>
        <ToyAdd onToyAdd={onToyEdit} toy={currToy}></ToyAdd>
    </div>

}