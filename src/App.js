import React, { useState, useEffect } from 'react';
import './App.css';
import TimeSelect from "./components/TimeSelect";
import DateSelect from "./components/DateSelect";
import FloorRooms from "./components/FloorRooms";
import SelectTower from "./components/SelectTower";
import EnterComment from "./components/EnterComment";
// import { useParams, useHistory } from "react-router-dom";

function App() {
    // const history = useHistory();
    // const { id } = useParams();
    const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    tower: "Выберите башню",
    floor: "Выберите этаж",
    room: "Выберите переговорную комнату",
    date: new Date().toISOString().split("T")[0],
    start: "начало",
    end: "конец",
    comment: "",
  });
    const handleGet = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/api/meeting-rooms/${id}`)
            .then((response) => response.json())
            .then((data) => setFormData(data))
            .catch((error) => console.error(error));
    };
    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    // useEffect(() => {
    //     fetch(`http://localhost:8080/api/meeting-rooms/${id}`)
    //         .then((response) => response.json())
    //         .then((data) => setFormData(data))
    //         .catch((error) => console.error(error));
    // }, [id]);

    // const handleEditSubmit = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         ...formData,
    //         floor: parseInt(formData.floor),
    //         room: parseInt(formData.room),
    //     };
    //
    //     fetch(`http://localhost:8080/api/meeting-rooms/${id}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setFormData(data);
    //             history.push("/meeting-room-form");
    //         })
    //         .catch((error) => console.error(error));
    // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      floor: parseInt(formData.floor),
      room: parseInt(formData.room),
    };

      fetch('http://localhost:8080/api/meeting-room-form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
          .then(response => {
              console.log('Data has been successfully sent to the server!');
          })
          .catch(error => {
              console.error('There was an error sending data to the server:', error);
          });

    console.log(JSON.stringify(data));
    alert("Данные отправлены в консоль");
  };


  const handleReset = (e) => {
      e.preventDefault();
    setFormData({
      tower: "",
      floor: "Выберите этаж",
      room: "Выберите переговорную комнату",
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
            <div className="form-item">
            <label htmlFor="label-user-id">ID:</label>
            <input className="user-id"
                   type="text"
                   placeholder="Введите ID"
                   value={id}
                   onChange={handleIdChange}/>
            </div>

          <div className="form-item inline flex-end">
            <button className="submit" type="submit">Отправить</button>
            <button className="clear" type="reset">Очистить</button>
            <button className="get" type="get" onClick={handleGet}>Получить</button>
          </div>
        </form>
          <footer className="footer">
              <p className="footer__author">© 2023 Lyrismet🍀</p>
          </footer>
      </div>
  );
}

export default App;