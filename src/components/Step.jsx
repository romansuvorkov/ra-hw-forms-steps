import React, { useState } from 'react';

export default function Step(props) {
    const { step } = props;

    return (
        <div className="step">
            <span className="step_date">{step.date}</span>
            <span className="step_distance">{step.distance}</span>
            <div className="step_interface">
                <span className="redact">redact</span>
                <span className="delete">delete</span>
            </div>
        </div>
    );
}