import React, { useState } from "react";
import './App.css';
import TimeSelect from "./components/TimeSelect";
import DateSelect from "./components/DateSelect";
import FloorRooms from "./components/FloorRooms";
import SelectTower from "./components/SelectTower";
import EnterComment from "./components/EnterComment";


function App() {
  const [formData, setFormData] = useState({
    tower: "",
    floor: "",
    room: "",
    date: "",
    start: "",
    end: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      floor: parseInt(formData.floor),
      room: parseInt(formData.room),
    };
    console.log(JSON.stringify(data));
  };

  const handleReset = () => {
    setFormData({
      tower: "",
      floor: "",
      room: "",
      date: "",
      start: "",
      end: "",
      comment: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeChange = (start, end) => {
    setFormData({
      ...formData,
      start: start,
      end: end,
    });
  };
  const handleDateChange = (value) => {
    setFormData({
      ...formData,
      date: value,
    });
  };

  return (
      <div className="App">
        <h1>Переговорка.vk</h1>
        <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
            <SelectTower
                value={formData.tower}
                onChange={handleInputChange}
            />
            <FloorRooms
                floorValue={formData.floor}
                roomValue={formData.room}
                onFloorChange={(value) =>
                    setFormData({ ...formData, floor: value })
                }
                onRoomChange={(value) => setFormData({ ...formData, room: value })}
            />
            <DateSelect
                value={formData.date}
                onChange={handleDateChange}
            />
            <TimeSelect
                startValue={formData.start}
                endValue={formData.end}
                onStartChange={(value) => handleTimeChange(value, formData.end)}
                onEndChange={(value) => handleTimeChange(formData.start, value)}
            />
            <EnterComment
                value={formData.comment}
                onChange={handleInputChange}
            />
          <div className="form-item inline flex-end">
            <button className="submit" type="submit">Отправить</button>
            <button className="clear" type="reset">Очистить</button>
          </div>
        </form>
      </div>
  );
}

export default App;