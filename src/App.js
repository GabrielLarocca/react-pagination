import React from 'react';
import {Title, TitleSmall} from './styles'
import Button from './components/Pagination/Button'

export default function App() {
  return (
    <div className="App">
       <Title fontSize={50}>
        Hello Word
        <span>Texto Menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="error">Error</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>

    </div>
  );
}

