import './App.css';   
import Navbar from './Components/Navbar/Navbar.js';  
import CrimePage from './Components/pages/CrimePage';
import Welcomepage from './Components/pages/welcomepage.js';
import Footer from './Components/footer/footer.js';  

function App() {


  return (
    <div className="App">
      <Navbar/>
       
      <div>
        <CrimePage />
        <Footer />
      </div>
       
    </div>

  );
}

<div>{
/*
Quick things I picked up
- the ./ mean current directory
- only importing js cause js imports cs; importing so we can use in our app js file

Questions

*/
}</div>


export default App;
