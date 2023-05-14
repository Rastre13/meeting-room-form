import { useState } from "react";


function DateSelect({ value, onChange }) {
    const [selectedDate, setSelectedDate] = useState(value);
    // const [selectedDate, setSelectedDate] = useState(value);

    const handleChange = (e) => {
        const selectedDate = e.target.value;
        setSelectedDate(selectedDate);
        onChange(selectedDate);
    };


    return (
        <div className="form-item">
            <label htmlFor="date-select">Дата:</label>
            <input
                // type="string"
                id="date-select"
                name="date-select"
                value={selectedDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                // min={new Date()}
                placeholder="Выберите дату"
            />
        </div>
    );
}

export default DateSelect;