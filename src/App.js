import logo from './logo.svg';
import './App.css';
import Admin_Signin from "./Admin-Signin"
import First from "./Home"
import Record_Change from "./Record-Change-By-Admin"
import Record_View from "./Record-View-By-User"
import Signupadmin from "./Sign-up-Admin"
import Error from "./Error"
import Footer from "./Footer"
import ListAdmin from "./ListAdmin"
import ListRecords from "./ListRecords"
import About from "./AboutUs"
import recordPage from "./recordPage"
import AddRecords from "./Add-Records"
import admin_options from "./Admin-Options" 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  localStorage.login="false"
  return (
    <div className="App">
        <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <a className="navbar-brand" href="/">Parcel Manager</a>
           {/*<a className="mx-1" href="#">Navbar</a>
           <a className="mx-1" href="#">Navbar</a>*/}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className='nav-item'><Link to={'/'} className="nav-link"> Home </Link></li>
                <li className='nav-item'><Link to={'/signin'} className="nav-link">Admin-Signin</Link></li>
                <li className='nav-item'><Link to={'/about'} className="nav-link">About</Link></li>

                {
                  localStorage.login == 'true'
                  ?
                  <li className='nav-item'><Link to={'/signup'} className="nav-link">Admin-Signup</Link></li>                  
                  :
                  null
                }
                {
                  localStorage.login == 'true'
                  ?
                  <li className='nav-item'><Link to={'/records'} className="nav-link">All-Records</Link></li>
                  :
                  null
                }
                {
                  localStorage.login == 'true'
                  ?
                  <li className='nav-item'><Link to={'/ListAdmin'} className="nav-link">ListAdmin</Link></li>
                  :
                  null
                }
                 {
                  localStorage.login == 'true'
                  ?
                  <li className='nav-item'><Link to={'/Add-Records'} className="nav-link">AddRecords</Link></li>
                  :
                  null
                }
                {
                  localStorage.login == 'true'
                  ?
                  <li className='nav-item'><Link to={'/recordPage'} className="nav-link">recordPage</Link></li>
                  :
                  null
                }


                
                  
             </ul>
              </div>
          </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          { /*<Route path="/about">
            
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          */}
          <Route exact path="/" component={First}/> {/* First path of Home */}
          <Route path="/signin" component={Admin_Signin}/>
          <Route path="/record-view" component={Record_View}/>
          <Route path="/record-change" component={Record_Change}/>
          <Route path="/signup" component={Signupadmin}/>
          <Route path="/error" component={Error}/>
          <Route path="/records" component={ListRecords}/>
          <Route path="/listadmin" component={ListAdmin}/>
          <Route path="/about" component={About}/>
          <Route path="/admin-options" component={admin_options}/>
          <Route path="/Add-Records" component={AddRecords}/>
          <Route path="/recordPage" component={recordPage}/>
          

        </Switch>
      </div>
    </Router>
      
      {/*<Error/> */}
      { /*<Admin_Signin/>*/ }
      
      

      { /* <First/>  */ }
      
      { /*<Record_Change/>*/ }
      
      { /*<Record_View/> */}
      {/* <Signupadmin/> */}
      {/*<Footer/>*/} 
      {/**/}
      {/**/}
       
    </div>
  );
}

export default App;
