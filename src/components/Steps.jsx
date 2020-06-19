import React, { useState } from 'react';
import InputInterface from './InputInterface';
import MessageField from './MessageField';
import ModelStep from './ModelStep';

export default function Steps() {

    const [steps, setSteps] = useState([]);

    const handleAdd = step => {
        let isDate = false;
          for (let item of steps) {
              if (item.id === step.id) {
                isDate = true;
                setSteps((prevSteps) => prevSteps.map((o) => {
                  if (o.id === step.id) return new ModelStep(step.date, (step.distance + o.distance));
                  return o;
                }))
              }
          }
          if (!isDate) {
              setSteps(prevSteps => [...prevSteps, step])
          }
    };

    const handleRemove = (id) => {
        setSteps((prevSteps) => prevSteps.filter((o) => o.id !== id));
    }

    return (
        <div className="steps_wrapper">
            < InputInterface onAdd={handleAdd} />
            <div className="step">
                <span className="step_date">Дата (ДД.ММ.ГГГГ)</span>
                <span className="step_distance">Пройдено км</span>
                <span className="actions">Действия</span>
            </div>
            < MessageField steps={steps} onRemove={handleRemove} />
        </div>
    );
}