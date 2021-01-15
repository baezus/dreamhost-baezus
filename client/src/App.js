import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <nav className="level">
        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-5">
              <strong>elias baez</strong>
            </p>
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
          Second Column
        </div>
      </div>
    </div>
  );
}

export default App;
