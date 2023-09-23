import { useSelector } from "react-redux"
import { setFilterBySort, setFilterBySearch, setFilterByInStock, setFilterByLabels } from "../../store/actions/toy.actions.js"
import { labels as Labels, sortDict, sortDirections } from '../../consts.js'
import debounce from 'debounce'
export function ToyFilter() {
    const sortBy = useSelector((state) => state.toyModule.filterBy.sort)
    const lablesFilter = useSelector((state) => state.toyModule.filterBy.labels)

    return <div className="toy-filter flex align-center space-between">
        <div>
            <div>
                <input type="text" name="search" placeholder="search" onChange={debounce((({ target }) => { setFilterBySearch(target.value) }), 200)} />
            </div>
            <select name="inStock" onChange={debounce((({ target }) =>
                setFilterByInStock(target.value)
            ), 50)}>
                <option value={"all"}>All toys</option>
                <option value={"inStock"}>In stock</option>
                <option value={"notInStock"}>Not in stock</option>
            </select>
            <div>lables:
                {Object.keys(Labels).map((label, idx) => <div key={idx}>
                    <input type="checkbox" name={Labels[label]} onChange={({ target }) => {
                        const label = target.name
                        let updatedLabels = [...lablesFilter];
                        if (updatedLabels.includes(label)) {
                            updatedLabels.splice(updatedLabels.findIndex((l) => l === label), 1);
                        } else {
                            updatedLabels = [...updatedLabels, label]
                        }
                        setFilterByLabels(updatedLabels)
                    }} />
                    <label htmlFor={label}>{Labels[label]}</label>
                </div>)}
            </div>
            <select name="sort" onInput={({ target }) => setFilterBySort({ ...sortBy, value: target.value })}>
                {Object.keys(sortDict).map((sortKey, idx) =>
                    <option key={idx} value={sortKey} checked={sortKey === sortBy.value}>{sortDict[sortKey]}</option>
                )}
            </select>
            <select name="sortDirection" onInput={({ target }) => setFilterBySort({ ...sortBy, direction: target.value })}>
                {Object.keys(sortDirections).map((direction, idx) =>
                    <option key={idx} value={direction} checked={direction === sortBy.direction}>{sortDirections[direction]}</option>
                )}
            </select>
        </div>
    </div>
}