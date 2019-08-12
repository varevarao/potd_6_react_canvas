import React from 'react';
import { connect } from 'react-redux';
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
class ComponentCanvas extends React.PureComponent {
    /**
     * Either creates a new CanvasElement wrapping the provided component,
     * or if the component was previously created, returns the ref
     * 
     * @param module React element to wrap
     */
    getorMakeElementFrom(module) {

    }

    render() {
        // Pick up react elements to be displayed
        return (
            <div className="ComponentCanvas">

            </div>
        )
    }
}

const mapStateToProps = state => ({
    elements: state.elements
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentCanvas);