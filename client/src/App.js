import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
             elias baez
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            elias@baez.us
          </div>
        </div>
      </nav>
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
