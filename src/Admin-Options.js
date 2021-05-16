import {React,Fragment, Component} from 'react'
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import First from "./Home"
import {Link} from 'react-router-dom';
import "./css/style.css"



class admin_options extends Component {

    render(){
        return (
            <Fragment>
            
            <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">View Record for ID variable / name</h2>
                            
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup"  href="/signup" value="New Admin Signup"/>
                                <Link to="/signup" className="btn btn-primary">Sign up</Link>
                            </div>
                            

                            <div class="form-group form-button">
                                <input type="submit" name="listadmin" id="listadmin"  href="/listadmin" value="List Admin"/>
                                <Link to="/listadmin" className="btn btn-primary">List Admin</Link>
                            </div>

                            <div class="form-group form-button">
                                <input type="submit" name="records" id="records"  href="/records" value="Search Around Get Records"/>
                                <Link to="/records" className="btn btn-primary">view all records</Link>
                            </div>
                            
                            <div class="form-group form-button">
                                <input type="AddRecords" name="AddRecords" id="AddRecords"  href="/Add-Records" value="Wanna add new Record "/>
                                <Link to="/Add-Records" className="btn btn-primary">Add another record</Link>
                            </div>
                    </div>
                    <div class="signup-image">
                        <figure><img src={sign_up} alt="sing up image"/></figure>
                        {
                            localStorage.login == 'true'
                        ?
                        <a href="#" class="signup-image-link">Sign in from Admin Account</a>
                        :
                        null
                        }
                        </div>
                </div>
            </div>
        </section>

            
            </Fragment>
        )
    }
}

export default admin_options