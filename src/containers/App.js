import React from 'react';
import { Provider } from 'react-redux';
import CanvasFrame from '../components/CanvasFrame';
import ComponentCanvas from '../components/ComponentCanvas';
import '../styles/App.css';
import initializeStore from '../store';
import { externalsLoaded} from '../store/actions/app';

export default class App extends React.PureComponent {
  store = initializeStore();

  componentDidMount() {
    const { components } = this.props;
    this.store.dispatch(externalsLoaded(components));
  }

  render() {
    return (
      <div className="App">
        <Provider store={this.store}>
          <CanvasFrame>
            <ComponentCanvas />
          </CanvasFrame>
        </Provider>
      </div>
    );
  }
}