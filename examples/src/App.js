import React from 'react';
import { StateChart } from './lib/StateChart';

let state = {
  inital: '1',
  states: {
    foo: {}
  }
};

let machine =
  '\n// Available variables:\n// Machine (machine factory function)\n// XState (all XState exports)\n\nconst lightMachine = Machine({\n  id: "light",\n  initial: "green",\n  states: {\n    green: {\n      on: { TIMER: "yellow" }\n    },\n    yellow: {\n      on: { TIMER: "red" }\n    },\n    red: {\n      on: { TIMER: "green" }\n    }\n  }\n});\n';

class App extends React.Component {
  render() {
    return <StateChart machine={machine} />;
  }
}

export default App;
