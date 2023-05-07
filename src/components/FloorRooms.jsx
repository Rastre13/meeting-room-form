import React, { useState } from "react";

const FloorRooms = () => {
    const [selectedFloor, setSelectedFloor] = useState(3);
    const [selectedRoom, setSelectedRoom] = useState(1);

    const handleFloorChange = (e) => {
        setSelectedFloor(e.target.value);
        setSelectedRoom(1);
    };

    const handleRoomChange = (e) => {
        setSelectedRoom(e.target.value);
    };

    return (
        <form>
            <label>
                Выберите этаж:
                <select value={selectedFloor} onChange={handleFloorChange}>
                    {Array.from({ length: 25 }, (_, i) => i + 3).map((floor) => (
                        <option key={floor} value={floor}>
                            {floor} этаж
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Выберите переговорку:
                <select value={selectedRoom} onChange={handleRoomChange}>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((room) => (
                        <option key={room} value={room}>
                            Переговорка №{room}
                        </option>
                    ))}
                </select>
            </label>
        </form>
    );
};

export default FloorRooms;