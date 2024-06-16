import { useRef, useState } from 'react';
import UniverSheet from './univer';
import { DEFAULT_WORKBOOK_DATA } from './default-workbook-data';

function App() {
  const [data] = useState(DEFAULT_WORKBOOK_DATA);
  const univerRef = useRef();

  return (

    <div style={{  height: '100%',backgroundColor:'red' }}>
      <div className="bar">
        <button
          onClick={() => {
            console.log(univerRef.current?.getData());
          }}
        >
          Get Data
        </button>
      </div>
      <UniverSheet style={{ flex: 1 }} ref={univerRef} data={data} />
    </div>

  );
}

export default App;
