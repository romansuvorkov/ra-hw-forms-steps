import React from 'react';

export default function Step(props) {
    const { step } = props;

    return (
        <div className="step">
            <span className="step_date">{step.date}</span>
            <span className="step_distance">{step.distance}</span>
            <div className="step_interface">
                <span className="redact"></span>
                <span className="delete" onClick={props.onRemove}>&#10006;</span>
            </div>
        </div>
    );
}