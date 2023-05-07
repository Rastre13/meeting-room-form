import React, {useState, useEffect} from 'react';

function TimeSelect({startValue, endValue, onStartChange, onEndChange}) {
    const [startOptions, setStartOptions] = useState([]);
    const [endOptions, setEndOptions] = useState([]);

    useEffect(() => {
        const currentTime = new Date();
        const roundedMinutes = Math.ceil(currentTime.getMinutes() / 30) * 30;
        currentTime.setMinutes(roundedMinutes);

        const startTimes = [];
        const endTimes = [];

        for (let i = 0; i < 4; i++) {
            const timeOption = new Date(currentTime.getTime() + i * 30 * 60 * 1000);
            const timeString =
                timeOption.getHours().toString().padStart(2, '0') +
                ':' +
                timeOption.getMinutes().toString().padStart(2, '0');

            startTimes.push(
                <option key={timeString} value={timeString}>
                    {timeString}
                </option>
            );
        }
        setStartOptions(startTimes);

        for (let i = 1; i < 5; i++) {
            const timeOption = new Date(currentTime.getTime() + i * 30 * 60 * 1000);
            const timeString =
                timeOption.getHours().toString().padStart(2, '0') +
                ':' +
                timeOption.getMinutes().toString().padStart(2, '0');

            // Добавляем только те значения, которые больше startValue
            if (timeString > startValue) {
                endTimes.push(
                    <option key={timeString} value={timeString}>
                        {timeString}
                    </option>
                );
            }
        }
        setEndOptions(endTimes);
    }, [startValue]);

    const handleStartChange = event => {
        onStartChange(event.target.value);
    };

    const handleEndChange = event => {
        onEndChange(event.target.value);
    };

    return (
        <div className="form-item">
            <label htmlFor="start-time">Время</label>

            <div>
                <label htmlFor="start-time">с:</label>
                <select
                    id="start-time"
                    name="start-time"
                    defaultValue={startValue}
                    onChange={handleStartChange}
                >
                    {startOptions}
                </select>

                <label htmlFor="end-time">до:</label>
                <select
                    id="end-time"
                    name="end-time"
                    defaultValue={endValue}
                    onChange={handleEndChange}
                >
                    {endOptions}
                </select>
            </div>
        </div>
    );
}

export default TimeSelect;