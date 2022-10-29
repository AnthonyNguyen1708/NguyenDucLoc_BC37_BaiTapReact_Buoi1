import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Carousel2 from './Carousel2/Carousel2';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Carousel2/>
      <Footer/>
    </div>
  );
}

export default App;
