import { useState } from 'react';
import './App.css'
// import Modal from './components/Modal.jsx';

function App() {
  const [vData, setVData] = useState([
    "1.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, unde?",
    "2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi at temporibus ratione? Illum, harum.",
    "3.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  ])
  const [num, setNum] = useState(0)
  const [view, setView] = useState(false)
  const [textData,setTextData] = useState("")

  const listView = function (num) {
    setNum(num)
    setView(true)
    console.log(num);
  }

  const handlerClose = () =>{
    setView(false)
  }
  return (
    <div className='App'>
      <div className='num'>
        {num}
      </div>
      <ul className='lists'>
        {
          vData.map(function (item, i) {
            return (
              <>
                <li onClick={() => { listView(i) }}> {item}</li>
              </>
            )
          })
        }
      </ul>

      {
        view == true ? <Modal vContent={vData} vNum={num} onClose={handlerClose}/> : null
      }
      {textData}<br />
      <input type="text" onChange={(e)=>{setTextData(e.target.value)}}  value={textData}/>
      <button onClick={()=>{
        let copy = [...vData];    // 코드값으로 되어있는 저장소에서 가져오는것 그래서 ... 배열 d copy
        copy.unshift(textData);
        setVData(copy)
        }}>입력</button>
      <button onClick={()=>{setTextData('')}}>지움</button>

    </div>
  )
}
function Modal({ vContent, vNum,onClose }) {
  return (
    <>
      <div className="modal">
        <div>
          <h3>제목</h3>
          <p>{vContent[vNum]}</p>
        </div>
        <div className="btnWarp">
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </>
  )
}

export default App;
