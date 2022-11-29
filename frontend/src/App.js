import logo from './logo.svg';
import './App.css';
import History from './components/Intro/History/History';
import AboutDanang from './components/Intro/AboutDanang/AboutDanang';
import Overview from './components/Intro/Overview/Overview';
import Footer from './components/Intro/Footer/Footer';
import Weather from './components/Intro/Weather/Weather';
function App() {
  return (
    <div className="App">      
        {/* <AboutDanang />        */}
        {/* <Overview/> */}
        {/* <Weather/> */}
        <History/>
       <Footer/>
    </div>
  );
}

export default App;
