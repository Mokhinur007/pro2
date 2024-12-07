import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Section from './components/section';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
