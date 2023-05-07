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
    console.log(JSON.stringify(formData));
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
          <div className="form-item">
            <SelectTower
                value={formData.tower}
                onChange={handleInputChange}
            />
          </div>
          <div className="form-item">
            <FloorRooms
                floorValue={formData.floor}
                roomValue={formData.room}
                onFloorChange={(value) =>
                    setFormData({ ...formData, floor: value })
                }
                onRoomChange={(value) => setFormData({ ...formData, room: value })}
            />
          </div>
          <div className="form-item">
            <DateSelect
                value={formData.date}
                onChange={handleDateChange}
            />
          </div>
          <div className="form-item">
            <TimeSelect
                startValue={formData.start}
                endValue={formData.end}
                onStartChange={(value) => handleTimeChange(value, formData.end)}
                onEndChange={(value) => handleTimeChange(formData.start, value)}
            />
          </div>
          <div className="form-item">
            <EnterComment
                value={formData.comment}
                onChange={handleInputChange}
            />
          </div>
          <div className="form-item">
            <button type="submit">Отправить</button>
            <button type="reset">Очистить</button>
          </div>
        </form>
      </div>
  );
}

export default App;