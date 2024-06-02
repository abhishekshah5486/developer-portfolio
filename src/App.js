import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Pages/LandingPage/LandingPage';
import Typing from './Components/Typing/Typing';
import CardComponent from './Components/CardComponent/CardComponent';
import Banner from './Components/Banner/Banner';
import ProgressBar from './Components/ProgressBar';
import AboutPage from './Pages/AboutPage/AboutPage';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CursorShadow from './Components/CursorShadow/CursorShadow';
import Projects from './Pages/Projects/Projects';
function App() {
  return (

    <div className="App">
      {/* <header className="App-header"> */}
        {/* <CursorShadow/> */}
        <NavBar />
        <LandingPage/>
        <Projects/>
        {/* <CardComponent
          header = {"Class is going on."}
          subHeader={"Everyone is making a tile"}
          img = {"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
          text = {"Approved training partner under the scheme for market led "}
          link = {"https://www.scaler.com/"}
          linkText={"Scaler"}
          position={"img-right"}
          bgColor = {"red"}
        /> */}
      {/* </header> */}
      {/* <Banner/> */}
      {/* <ProgressBar/> */}

      {/* <Switch>
        <Route exact path='/' Component={LandingPage}></Route>
        <Route path='/AboutMe' Component={AboutPage}></Route>
      </Switch> */}
    </div>
  );
}

export default App;
 