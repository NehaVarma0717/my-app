import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Forms from './Components/Forms';
import Nevbar from './Components/Nevbar';
import Alert from './Components/Alert';

/* import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
        <Nevbar title="TextUtils" home="HomeUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
         {/*  <Routes>
            <Route path="/about" element={<About />} /> */}
{/*             <Route path="/" element={<Forms heading="Enter the text" mode={mode} showAlert={showAlert} />} />
          </Routes> */}
          <Forms heading="Enter the text" mode={mode} showAlert={showAlert} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
