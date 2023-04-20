import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Benifits of using React
        </p>
        <ol>
          <li>Component-based architecture</li>
          <li>Virtual DOM for efficient updates</li>
          <li>Rich ecosystem and community</li>
          <li>Cross-platform development</li>
          <li> Strong community support</li>
        </ol>
       
      </header>
      <buttom btn = "App-button">Get started</buttom>
    </div>
  );
}

export default App;
