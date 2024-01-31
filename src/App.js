// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';

function App() {
  return (
    <div className="App">
      <Greet name = "Okoro"/>
      <Welcome name = "Jamil"/>
      <Message/>
    </div>
  );
}

export default App;
