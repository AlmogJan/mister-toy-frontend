import { labels as Labels } from "../../consts.js";
import { toyService } from "../../services/toy.service.js";
import { useState } from "react";

export function ToyAdd({ onToyAdd, toy }) {
    const [newToy, setNewToy] = useState(
        toy || toyService.getEmptyToy()
    );
    function handleChange({ target }) {
        const field = target.name;
        let value = target.value;

        switch (target.type) {
            case "number":
            case "range":
                value = +value || "";
                break;

            case "checkbox":
                value = target.checked;
                break;

            default:
                break;
        }

        setNewToy((prevNewToy) => ({
            ...prevNewToy,
            [field]: value,
        }));
    }

    function handleLabelChange({ target }) {
        const isChecked = target.checked;
        const value = target.name;
        const newToyLabels = [...newToy.labels]
        if (isChecked) {
            newToyLabels.push(value)

        } else {
            newToyLabels.splice(newToyLabels.findIndex((l) => l === value), 1)
        }

        setNewToy((prevNewToy) => ({
            ...prevNewToy,
            labels: newToyLabels
        }))
    }
    const { name, price, labels } = newToy;

    return <div>
        <form
            onSubmit={(ev) => {
                ev.preventDefault();
                onToyAdd(toyService.createToy(name, price, labels, true))
            }}>
            <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
            <input type="number" name="price" placeholder="Price" value={price} onChange={handleChange} />
            <div>lables: {Object.keys(Labels).map((label, idx) => <div key={idx}>
                <input type="checkbox" name={Labels[label]} checked={labels.includes(Labels[label])} onChange={handleLabelChange} />
                <label htmlFor={label}>{Labels[label]}</label>
            </div>)}
            </div>
            <button className="wordy-btn">{toy ? "save" : "Add"}</button>
        </form>

    </div>
}