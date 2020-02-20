import React from 'react';
import UIProvider from './Theming/UIProvider'
import ExampleComposition from './Composition/ExampleComposition';
import './reset.css';

function App() {
  return (
    <UIProvider>
      <ExampleComposition />
    </UIProvider>
  );
}

export default App;
