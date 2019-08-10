import React from 'react';
import '../styles/ComponentCanvas.css';

/**
 * The main canvas where components can be edited, and moved aorund.
 * 
 * Process:
 * 0. Maintain a grid, in the foreground (or background, customaizable later).
 *      This could be defined using a computed set of column, and row breakpoints
 * 1. Each child component will be wrapped in a div, which we will control
 *      That way, the component can remain styled itself, and not care about
 *      the draggable container.
 * 2. When drag starts, calculate the bounds of the container as an offset from the mouse
 * 3. On each drag move, check which grid breakpoints lie within the range
 *      Calculate the extemes, and the rest can be interpolated
 */
export default class ComponentCanvas extends React.PureComponent {
    render() {
        return (
            <div className="ComponentCanvas">

            </div>
        )
    }
}