import { useState } from "react";

function DateSelect({ value, onChange }) {
    const [selectedDate, setSelectedDate] = useState(value);

    const handleChange = (e) => {
        const selectedDate = e.target.value;
        setSelectedDate(selectedDate);
        onChange(selectedDate);
    };

    return (
        <div className="form-item inline">
            <label htmlFor="date-select">Выберите дату:</label>
            <input
                type="date"
                id="date-select"
                name="date-select"
                value={selectedDate}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                placeholder="Выберите дату"
            />
        </div>
    );
}

export default DateSelect;