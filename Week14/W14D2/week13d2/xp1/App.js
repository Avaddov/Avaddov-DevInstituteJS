import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Simulation 1: Error Boundary Wrapping Multiple BuggyCounters</h1>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <h1>Simulation 2: Error Boundary for Each BuggyCounter</h1>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <h1>Simulation 3: BuggyCounter without Error Boundary</h1>
        <BuggyCounter />
      </div>
    );
  }
}

export default App;
