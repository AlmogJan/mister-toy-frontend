import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addToy, loadToys, removeToy, updateToy } from "../../store/actions/toy.actions.js"
import { ToyList } from "../../components/ToyList/ToyList.jsx";
import { ToyAdd } from "../../components/ToyAdd/ToyAdd.jsx";
import { ToyFilter } from "../../components/ToyFilter/ToyFilter.jsx";
export function ToyIndex() {
    const [addMode, setAddMode] = useState(false)
    const toys = useSelector(
        (storeState) => storeState.toyModule.toys
    );
    useEffect(() => {
        loadToys().catch((err) => console.log(err));
    }, []);

    function onToyRemove(toyId) {
        removeToy(toyId).catch((err) => console.error(err))
    }
    function onToyAdd(toy) {
        addToy(toy).catch((err) => console.error(err))
        setAddMode(!addMode)
    }
    return <div>
        <ToyFilter></ToyFilter>
        <ToyList toys={toys} onToyRemove={onToyRemove} ></ToyList>
        {addMode ? (<ToyAdd onToyAdd={onToyAdd} />) : (<button onClick={() => setAddMode(!addMode)}>
            add toy
        </button>)}
    </div>
}
