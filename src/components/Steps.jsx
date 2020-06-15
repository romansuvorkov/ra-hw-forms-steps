import React, { useState } from 'react';
import InputInterface from './InputInterface';
import MessageField from './MessageField';
import shortid from "shortid";
import sortArr from './sortArr';
import ModelStep from './ModelStep';
import parseDate from './parseDate';

export default function Steps() {
    const [form, setForm] = useState({
        distance: '',
        date: ''
    });

    const handleDistanceChange = value => {
        setForm(prevForm => ({...prevForm, distance: value}));
    }

    const handleDateChange = value => {
        setForm(prevForm => ({...prevForm, date: value}));
    }

    const [steps, setSteps] = useState([]);

    const handleSubmit = () => {
        const searchID = parseDate(form.date);
        // const newStep = new ModelStep(form.date, form.distance);
        let isDate = false;
        // for (let item of steps) {
        //   if (item.id === newStep.id) {
        //     isDate = true;
        //     item.distance = item.distance + newStep.distance;
        //   }
        // }
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
            < MessageField steps={steps} />
        </div>
    );
}