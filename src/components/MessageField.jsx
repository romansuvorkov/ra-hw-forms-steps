import React, { useState } from 'react';
import sortArr from './sortArr';
import Step from './Step';

export default function MessageField(props) {
    const { steps } = props;
    sortArr(steps);
    
    return (
        <div className="steps">
            {steps.map(o => <Step step={o} key={o.id}/>)}
        </div>
    );
}