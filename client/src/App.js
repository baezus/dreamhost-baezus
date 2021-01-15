import './styles/App.scss';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="columns">
        <div className="column is-two-thirds">
          <LeftColumn/>
        </div>
        <div className="column">
          <RightColumn/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
