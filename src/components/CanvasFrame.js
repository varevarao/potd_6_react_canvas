import React from 'react';
import { connect } from 'react-redux';
import { uid } from 'react-uid';
import '../styles/CanvasFrame.css';

/**
 * The left of the frame contains the list of parsed externals,
 * and a trigger to reload the externals
 */
const FrameLeft = ({ components }) => {
    const options = [];
    for (let [key, ] of Object.entries(components)) {
        options.push(
            <option key={uid(key)}>{key}</option>
        )
    }

    return (
        <div className="FrameLeft">
            <select name="componentSelect" id="components">
                {options}
            </select>
        </div>
    );
};

/**
 * The top of the frame contains the name of the project/page,
 * and any dynamic actions available based on the external (TODO)
 */
const FrameTop = () => {
    return (
        <div className="FrameTop"></div>
    );
};

/**
 * The right of the frame includes any custom options to pass to the selected external
 */
const FrameRight = () => {
    return (
        <div className="FrameRight"></div>
    );
};

/**
 * The bottom of the frame has nothing right now
 */
const FrameBottom = () => {
    return (
        <div className="FrameBottom"></div>
    );
};

class CanvasFrame extends React.PureComponent {
    render() {
        const { externals } = this.props;

        return (
            <div className="CanvasFrame">
                <FrameLeft components={externals} />
                <div className="FrameCenter">
                    <FrameTop />
                    <div className="FrameContainer">
                        {this.props.children}
                    </div>
                    <FrameBottom />
                </div>
                <FrameRight />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    externals: state.app.externals
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasFrame);