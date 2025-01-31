import React, { useState } from "react";
import "./App.css";
import MaterialSelection from "./MaterialSelection";

const App = () => {
  const [circles, setCircles] = useState([]);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [material, setMaterial] = useState("");

  const handleAddCircle = () => {
    const newCircle = {
      id: Date.now(),
      x: 50,
      y: 50,
    };
    setCircles([...circles, newCircle]);
    setSelectedCircle(newCircle.id);
  };

  const handleDragStart = (e, circle) => {
    e.dataTransfer.setData("circleId", circle.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, circle) => {
    const rect = e.target.getBoundingClientRect();
    const circleId = e.dataTransfer.getData("circleId");
    const draggedCircle = circles.find((c) => c.id === parseInt(circleId));

    if (draggedCircle) {
      const newX = e.clientX - rect.left - 15; 
      const newY = e.clientY - rect.top - 15; 
      handleDrag(draggedCircle.id, newX, newY);
    }
  };

  const handleDrag = (id, x, y) => {
    const updatedCircles = circles.map((circle) =>
      circle.id === id ? { ...circle, x, y } : circle
    );
    setCircles(updatedCircles);
  };

  const handleInputChange = (id, x, y) => {
    const updatedCircles = circles.map((circle) =>
      circle.id === id ? { ...circle, x, y } : circle
    );
    setCircles(updatedCircles);
  };

  const handleSubmit = () => {
    const output = {
      circles: circles.map((circle) => ({
        id: circle.id,
        x: circle.x,
        y: circle.y,
        xPercentage: (circle.x / 500) * 100, 
        yPercentage: (circle.y / 500) * 100,
      })),
      material,
    };
    console.log(output);
  };

  return (
    <div className="app">
      <div className="section">
        <div className="left-section">
          <div
            className="image-container"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img
              src="/img/product.png" 
              alt="Interactive Area"
              className="image"
            />
            {circles.map((circle) => (
              <div
                key={circle.id}
                className="circle"
                style={{
                  left: `${circle.x}px`,
                  top: `${circle.y}px`,
                  position: "absolute", 
                }}
                draggable
                onDragStart={(e) => handleDragStart(e, circle)}
                onClick={() => setSelectedCircle(circle.id)}
              />
            ))}
          </div>
        </div>

        <div className="right-section">
          <h2>Bewegen Sie den Kreis - wie Sie möchten</h2>
          <h5>Geben Sie die Maße ein, um den Kreis hinzuzufügen!</h5>
          <div className="input-container">
            <div className="input-wrapper">
              <label>Der Abstand für X</label>
              <input
                placeholder="Wert"
                type="number"
                value={
                  selectedCircle
                    ? circles.find((circle) => circle.id === selectedCircle)?.x || ""
                    : ""
                }
                onChange={(e) => {
                  if (selectedCircle) {
                    handleInputChange(
                      selectedCircle,
                      parseInt(e.target.value),
                      circles.find((circle) => circle.id === selectedCircle)?.y || 0
                    );
                  }
                }}
              />
            </div>
            <div className="input-wrapper">

              <label>Der Abstand für Y</label>
              <input
                placeholder="Wert"
                type="number"
                value={
                  selectedCircle
                    ? circles.find((circle) => circle.id === selectedCircle)?.y || ""
                    : ""
                }
                onChange={(e) => {
                  if (selectedCircle) {
                    handleInputChange(
                      selectedCircle,
                      circles.find((circle) => circle.id === selectedCircle)?.x || 0,
                      parseInt(e.target.value)
                    );
                  }
                }}
              />
            </div>

          </div>
          <button onClick={handleAddCircle} className="add-circle-button">
            Kreis hinzufügen
          </button>

          <MaterialSelection material={material} setMaterial={setMaterial} />
{/* 
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button> */}
        </div>
      </div>
    </div >
  );
};

export default App;
