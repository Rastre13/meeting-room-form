import React from "react";

function SelectTower({value, onChange}) {
    return (
        <div>
            <label htmlFor="tower">Башня</label>
            <select
                id="tower"
                name="tower"
                className="form__label"
                value={value}
                onChange={onChange}
            >
                <option disabled value="">
                    Выберите башню
                </option>
                <option value="A">Башня А</option>
                <option value="B">Башня Б</option>
            </select>
        </div>
    );
}

export default SelectTower;