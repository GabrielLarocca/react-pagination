import React from 'react';
import Button from './components/Pagination/Button'

export default function App() {
  return (
    <div className="App">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="error">Error</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
    </div>
  );
}

