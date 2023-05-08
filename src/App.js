import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
