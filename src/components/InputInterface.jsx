import React, { useState } from 'react';

export default function InputInterface(props) {

    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit();
    };

    const handleDistanceChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    const handleDateChange = (event) => {
        props.onDateChange(event.target.value);
    };

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