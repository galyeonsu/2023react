import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './App.css'

import ModalView from "../components/ModalView.jsx"
function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, unde?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi at temporibus ratione? Illum, harum.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  ])
  // function handlerTab() {
  //   setNum(1)

  // }
  return (
    <div className="App">
   
      {num}

      <div className='tab'>
        <ul >
          <li onClick={() => { setNum(0) }} className={`${num == 0 ? "active" : ""}`}>tab1</li>
          <li onClick={() => { setNum(1) }} className={`${num == 1 ? "active" : ""}`}>tab2</li>
          <li onClick={() => { setNum(2) }} className={`${num == 2 ? "active" : ""}`}>tab3</li>
        </ul>
      </div>
      <div style={{ margin: "0 0 10px 0 " }}>
        {data[num]}
      </div>
      <hr />


      <ul className='lists'>
        {
          data.map(function (item,i) {
            return (
              <>
                <li onClick={()=>{setNum(i)}}>{item}</li>
              </>
            )
          })
        }
      </ul>
      <Modal sm={data} sNum = {num}/>
    </div>
  );
}

function Modal(props) {
  return(
    <>
    <div className='modal'>
      <h3>suject1</h3>
      <p> {props.sm[props.sNum]}</p>
    </div>
    </>
  )
}
export default App;
