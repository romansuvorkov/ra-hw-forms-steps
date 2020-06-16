import React, { useState } from 'react';
import InputInterface from './InputInterface';
import MessageField from './MessageField';
import ModelStep from './ModelStep';
import parseDate from './parseDate';

export default function Steps() {
    const [form, setForm] = useState({
        distance: '',
        date: ''
    });

    const [steps, setSteps] = useState([]);

    const handleRemove = (id) => {
        setSteps((prevSteps) => prevSteps.filter((o) => o.id !== id));
    }

    const handleDistanceChange = value => {
        setForm(prevForm => ({...prevForm, distance: value}));
    }

    const handleDateChange = value => {
        console.log(value);
        console.log(typeof value);
        setForm(prevForm => ({...prevForm, date: value}));
    }

    const handleSubmit = () => {
        const searchID = parseDate(form.date);
        let isDate = false;
        for (let item of steps) {
            if (item.id === searchID) {
              isDate = true;
              setSteps((prevSteps) => prevSteps.map((o) => {
                if (o.id === searchID) return new ModelStep(form.date, (Number.parseInt(form.distance, 10) + o.distance));
                return o;
              }))
            }
        }
        if (!isDate) {
            setSteps(prevSteps => ([
            ...prevSteps, 
            new ModelStep(form.date, form.distance)
            ]));
        }
    }


    return (
        <div className="steps_wrapper">
            < InputInterface onSubmit={handleSubmit} 
                             onDistanceChange={handleDistanceChange} 
                             onDateChange={handleDateChange} />
            <div className="step">
                <span className="step_date">Дата (ДД.ММ.ГГГГ)</span>
                <span className="step_distance">Пройдено км</span>
                <span className="actions">Действия</span>
            </div>
            < MessageField steps={steps} onRemove={handleRemove} />
        </div>
    );
}