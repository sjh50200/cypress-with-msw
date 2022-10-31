import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const response = await axios.get('/mock');
      setData(response.data.data);
    })();
  })

  return (
    <div>
      받아온 데이터는 {data}
    </div>
  );
}

export default App;
