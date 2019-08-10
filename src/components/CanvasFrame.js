import React from 'react';
import '../styles/CanvasFrame.css';

export default class CanvasFrame extends React.PureComponent {
    render() {
        return (
            <div className="CanvasFrame">
                {this.props.children}
            </div>
        );
    }
}