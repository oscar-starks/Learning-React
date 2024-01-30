// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Greet name = "Okoro"/>
      <Welcome/>
    </div>
  );
}

export default App;
