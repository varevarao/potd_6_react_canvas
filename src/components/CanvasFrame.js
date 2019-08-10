import React from 'react';
import { connect } from 'react-redux';
import '../styles/CanvasFrame.css';

class CanvasFrame extends React.PureComponent {
    render() {
        return (
            <div className="CanvasFrame">
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasFrame);