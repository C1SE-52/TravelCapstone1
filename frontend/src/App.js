import logo from './logo.svg';
import './App.css';
import History from './components/Intro/History/History';
import AboutDanang from './components/Intro/AboutDanang/AboutDanang';
import Overview from './components/Intro/Overview/Overview';
import Footer from './components/Intro/Footer/Footer';
function App() {
  return (
    <div className="App">      
        {/* <AboutDanang />        */}
        <Overview/>
       <Footer/>
    </div>
  );
}

export default App;
