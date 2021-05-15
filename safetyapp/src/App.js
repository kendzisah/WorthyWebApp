import './App.css';   //the ./ mean current directory
//we assign the name number to this file path
import navbar from './components/navbar.js';  //only importing js cause js imports cs; importing so we can use in our app js file

function App() {
  return (
    <div className="App">
      <navbar/>
      <p>Hello</p>
    </div>
  );
}

export default App;
