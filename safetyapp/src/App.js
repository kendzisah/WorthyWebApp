import '@progress/kendo-theme-default/dist/all.css';
import './App.css';   
import Navbar from './Components/Navbar/Navbar.js';  
import CrimePage from './Components/pages/CrimePage';
import Welcomepage from './Components/pages/welcomepage.js';
import Footer from './Components/footer/footer.js'; 



function App() {


  return (
    <div className="App">
      <Navbar/>
       
      <div className="page-sizing">
        <CrimePage />
        
        {/* <Footer /> */}
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
