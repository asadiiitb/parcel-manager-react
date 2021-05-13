import {React,Fragment} from 'react'
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import "./css/style.css"

function First() {
  return (
    		<Fragment>

    		<section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={sign_in} alt="sing up image"/></figure>
                        <a href="#" class="signup-image-link">Admin login</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Welcome To Parcel Manager </h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Enter ID to check"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Find Parcel Details"/>
                            </div>
                        </form>
                        <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    		
       	</Fragment>
    	)
}

export default First;