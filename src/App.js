import React, { useState } from 'react';
import axios from 'axios';

import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apikey=8633a1ed96694edf9cebb3dd382b0b95',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea
    //       rows={7}
    //       value={JSON.stringify(data, null, 2)}
    //       readOnly={true}
    //     />
    //   )}
    // </div>
    <NewsList />
  );
};

export default App;
