import React from 'react';
import { connect } from 'react-redux';
import CanvasFrame from '../components/CanvasFrame';
import ComponentCanvas from '../components/ComponentCanvas';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <CanvasFrame>
        <ComponentCanvas />
      </CanvasFrame>
    </div>
  );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
