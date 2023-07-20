import './App.css';
import Nav from './Components/Navigation/Nav';
import Footer from './Components/Footer/Footer';
// import Main from './Components/Main';
import Router from './Components/Router';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
