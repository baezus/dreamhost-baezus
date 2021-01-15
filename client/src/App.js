import './styles/App.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="columns">
        <div className="column is-half">
          First Column
        </div>
        <div className="column is-half">
          Second
        </div>
      </div>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            About / Programming / Poetry / Journalism
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
