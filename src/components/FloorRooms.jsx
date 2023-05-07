import React, { useState, useEffect } from "react";

function FloorRooms({ floorValue, roomValue, onFloorChange, onRoomChange }) {
    const [selectedFloor, setSelectedFloor] = useState(3);
    const [selectedRoom, setSelectedRoom] = useState(1);

    const handleFloorChange = (e) => {
        setSelectedFloor(e.target.value);
        setSelectedRoom(1);
        onFloorChange(e.target.value);
    };

    const handleRoomChange = (e) => {
        setSelectedRoom(e.target.value);
        onRoomChange(e.target.value);
    };

    useEffect(() => {
        setSelectedFloor(parseInt(floorValue));
        setSelectedRoom(parseInt(roomValue));
    }, [floorValue, roomValue]);

    return (
        <div className="form-item inline space-between">
            <label>
                Этаж:
                <select value={selectedFloor.toString()} onChange={handleFloorChange}>
                    {Array.from({ length: 25 }, (_, i) => i + 3).map((floor) => (
                        <option key={floor} value={floor}>
                            {floor} этаж
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Переговорка:
                <select value={selectedRoom.toString()} onChange={handleRoomChange}>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((room) => (
                        <option key={room} value={room}>
                            Переговорка №{room}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default FloorRooms;