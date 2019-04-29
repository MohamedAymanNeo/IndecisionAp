import React from 'react';



// Functional Component => [Action Component]
const Action = (props) => (
    <div>
        <button
        className="big-button"
            disabled={!props.hasOptions}
            onClick={props.handlePick}
        >
        What Should I Do?
        </button>
    </div>
);


export default Action;