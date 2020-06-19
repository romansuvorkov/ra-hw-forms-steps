import React, { useState } from 'react';
import ModelStep from './ModelStep';

export default function InputInterface(props) {

    const [form, setForm] = useState({
        distance: '',
        date: ''
    });

    const handleDistanceChange = event => {
        const {value} = event.target;
        setForm(prevForm => ({...prevForm, distance: value}));
    };

    const handleDateChange = (event) => {
        const {value} = event.target;
        setForm(prevForm => ({...prevForm, date: value}));
    };

    const {onAdd} = props;


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        onAdd(new ModelStep(form.date, form.distance));
    }

    return (
        <form className="interface_wrapper" onSubmit={handleSubmit}>
            <div className="input_wrappers">
                <label htmlFor="name">Дата (ДД.ММ.ГГГГ)</label>
                <input id="date" type="date" className="date" onChange={handleDateChange}></input>                
            </div>
            <div className="input_wrappers">
                <label htmlFor="distance">Пройдено км</label>
                <input id="distance" type="number" className="distance" onChange={handleDistanceChange}></input>
            </div>
            <button className="submit_btn" type="submit">Add step</button>
        </form>
    );
}