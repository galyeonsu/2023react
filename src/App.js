import logo from './logo.svg';
import './App.css';

function App() {
  const gal = "안녕하세요"
  function test() {
    return 100;
  }
  return (
    <div className="App">
      <div>{gal}{test()}</div>
    </div>
  );
}

export default App;
