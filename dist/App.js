import React from 'react';
import { Provider } from 'react-redux';
import CanvasFrame from '../components/CanvasFrame';
import ComponentCanvas from '../components/ComponentCanvas';
import '../styles/App.css';
import initializeStore from '../store';
import { externalsLoaded } from '../store/actions/app';
export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.store = initializeStore();
  }

  componentDidMount() {
    const {
      components
    } = this.props;
    this.store.dispatch(externalsLoaded(components));
  }

  render() {
    return React.createElement("div", {
      className: "App"
    }, React.createElement(Provider, {
      store: this.store
    }, React.createElement(CanvasFrame, null, React.createElement(ComponentCanvas, null))));
  }

}