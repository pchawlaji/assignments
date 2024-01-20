import React, { useState, useCallback, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. 
//Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [renderCount, setRenderCount] = useState(0);
    const buttonRender = useRef(0);

    const handleReRender = useCallback(() => {
        // Update state to force re-render
        setRenderCount(renderCount + 1);
        // Update the ref to track the number of button clicks
        buttonRender.current += 1;
    }, [renderCount]);


    return (
        <div>
            <p>This component has rendered {buttonRender.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};