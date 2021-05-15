import {React,Fragment, Component} from 'react'
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import First from "./Home"
import Cards from "./Cards";
import {Link} from 'react-router-dom';
import "./css/style.css"

class Record_View extends Component {
    


    render(){
        return (
            <Fragment>
            
            <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">View Record for ID variable / name</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="ItemNumber"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="itemNumber" id="itemNumber" placeholder="Item Number"/>
                            </div>
                            <div class="form-group">
                                <label for="date"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="date" id="date" placeholder="Date"/> {/* Date format me present */}
                            </div>
                            <div class="form-group">
                                <label for="trackId"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="trackId" id="trackId" placeholder="Tracking ID"/>
                            </div>
                            <div class="form-group">
                                <label for="username"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="username" id="username" placeholder="User Name"/>
                            </div>
                            <div class="form-group">
                                <label for="company"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="company" id="company" placeholder="Company Name"/>
                            </div>
                            <div class="form-group">
                                <label for="comments"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="comments" id="comments" placeholder="Comments"/>
                            </div>
                            <div class="form-group">
                                <label for="status"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="status" id="status" placeholder="Status"/>
                            </div>
                            <div class="form-group">
                                <label for="contact"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="contact" id="contact" placeholder="Phone Number"/>
                            </div>
                            
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Check Another Record"/>
                            {/* Link to Home here */}
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={sign_up} alt="sing up image"/></figure>
                        <a href="#" class="signup-image-link">Sign in from Admin Account</a>
                    </div>
                </div>
            </div>
        </section>

        
       
            </Fragment>
        )
    }
}

export default Record_View