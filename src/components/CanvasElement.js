import React from 'react';
import { connect, Provider } from 'react-redux';

/**
 * A wrapped component, that takes into account providing an isolated store to the embedded component
 * In order to utilize this, the exported component should have a static 'initializeStore' method attached to the class
 */
class WrappedComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        const { Component } = props;
        this.store = ('initializeStore' in Component ? Component.initializeStore() : null);
    }

    render() {
        const { Component, ...innerProps } = this.props;
        return (
            this.store ?
                <Provider store={this.store}> <Component {...innerProps} /> </Provider>
                :
                <Component {...innerProps} />
        )
    }
}

class CanvasElement extends React.PureComponent {
    render() {
        <WrappedComponent Component={this.props.module} />
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasElement);