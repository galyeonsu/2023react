import { useState } from 'react';
import './App.css'
import {vData,vData1} from '../data.js'
import { Button,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [viewData, setViewData] = useState(vData)
  const [viewData1, setViewData1] = useState(vData1)

  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <div className='Container bg-primary' >test</div>
      {
        viewData.map(function (item) {
          return (
            <>
              <div style={{ display: "flex" }}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.content}</div>
                <div className='avata'>
                  <img src={`./img/${item.img}`} alt="" />
                </div>
              </div>
            </>
          )
        })
      }
      {
        viewData.map(function (item) {
          return (
            <>
              <div style={{ display: "flex" }}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.content}</div>
                <div className='avata'>
                  <img src={`./img/${item.img}`} alt="" />
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default App;
