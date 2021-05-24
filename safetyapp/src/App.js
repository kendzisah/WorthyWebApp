import '@progress/kendo-theme-default/dist/all.css';
import './App.css';   
import Navbar from './Components/Navbar/Navbar.js';  
import CrimePage from './Components/pages/CrimePage';
import Welcomepage from './Components/pages/welcomepage.js';
<<<<<<< HEAD
import Footer from './Components/footer/footer.js';  
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
=======
import Footer from './Components/footer/footer.js'; 

>>>>>>> chart


function App() {


  return (

    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route path='/Search'>
            <div className="page-sizing">
              <div className="crime">
                <CrimePage/>
              </div>
              <div className="foot">
                <Footer/>
              </div>
            </div>
          </Route>

          <Route path='/'>
            <div className="page-sizing">
              <div className="crime">
                <Welcomepage/>
              </div>
              <div className="foot">
                <Footer/>
              </div>
            </div>
          </Route>



        </Switch>

      </div>
    </Router>

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
