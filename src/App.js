import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const gal = "안녕하세요."
  let [listData, setListData] = useState(1)
  return (
    <div className="App">

      <div>{listData}</div>

      <button onClick={()=>{setListData(listData+1)}}>button</button>
    </div>
  );
}

export default App;
