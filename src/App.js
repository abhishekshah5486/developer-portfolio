import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Pages/LandingPage/LandingPage';
import Typing from './Components/Typing/Typing';
import CardComponent from './Components/CardComponent/CardComponent';
import Banner from './Components/Banner/Banner';
import ProgressBar from './Components/ProgressBar';
import AboutPage from './Pages/AboutPage/AboutPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      {/* <header className="App-header"> */}
        <NavBar />
        {/* <Typing 
          text = {[
            "Software Developer",
            "iOS Developer" 
          ]}
          typingSpeed = {100}
          deletingSpeed = {50}
          duration={1000}
        /> */}
        <LandingPage/>
        <CardComponent
          header = {"Class is going on."}
          subHeader={"Everyone is making a tile"}
          img = {"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
          text = {"Approved training partner under the scheme for market led "}
          link = {"https://www.scaler.com/"}
          linkText={"Scaler"}
          position={"img-right"}
          bgColor = {"red"}
        />
      {/* </header> */}
      <Banner/>
      <ProgressBar/>
    </div>
  );
}

export default App;
