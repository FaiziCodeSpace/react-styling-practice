import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import External from './components/externalFile';
import Style from './components/internalFile';
import StyleComponent from './components/styleComponent';


const components = {
  External,
  Style,
  StyleComponent
};

function App() {
  const [selected, setSelected] = useState('External');

  const ComponentToRender = components[selected];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React Practice Components</h1>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {Object.keys(components).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>

      <div style={{ marginTop: '2rem' }}>
        {ComponentToRender ? <ComponentToRender /> : <p>No component found.</p>}
      </div>
    </div>
  );
}

export default App;
