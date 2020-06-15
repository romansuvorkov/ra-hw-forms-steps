import React, { useState } from 'react';

export default function InputInterface(props) {
    const {date, distance} = props;

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
            <input className="date" onChange={handleDateChange}></input>
            <input className="distance" onChange={handleDistanceChange}></input>
            <button className="submit_btn" type="submit"></button>
        </form>
    );
}