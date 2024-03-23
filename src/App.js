import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2b2c47';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      
      // Evil code for Sparkling a Title of Page
      // setInterval(() => {
      //   document.title = "TextUtils is amazing mode";
      // }, 2000);
      
      // setInterval(() => {
      //   document.title = "Install Now TextUtills";
      // }, 1500);
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
     {/* <Navbar title="TextUtils" aboutText="About"/> */}
     <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Routes>

          {/* { when you will not use exact path example */}
          {/* /users --> component 1
          /users/home --> component 1  */}

          {/* { when you will use exact path example */}
          {/* /users --> component 1
          /users/home --> component 2  */}

          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading= "TextUtils - Word Counter, Character Counter, Remove extra Spaces " mode={mode}/>}></Route>
        </Routes>
      </div>
     </Router>
    </>
  );
}

export default App;
