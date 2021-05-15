import {React,Fragment, Component} from 'react'
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import Admin_Signin from "./Admin-Signin"
import Cards from "./Cards";
import {Link} from 'react-router-dom';
import "./css/style.css"

class First extends Component {
     constructor(props) {
        super(props);
        this.state = {
            searchKey: "",
        }
        this.SearchKey=this.SearchKey.bind(this)
    }    
        SearchHandler= (event) => {
            this.setState({searchkey: event.target.value});
        }
    handleClick= (event) =>{
        event.preventDefault();
        let parcel = {
            searchkey: this.state.searchkey
        }
        axios.post('http://localhost:8082/api/customer/login',parcel)
            .then(response =>{
                console.log(response);
                console.log(response.data);
                {this.props.history.push('/');
                    console.log("found");
                }
            })
            .catch(error =>{
                console.log(error)
            })
        alert('found');
    }
    render(){
        return (
    		<Fragment>

    		<section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={sign_in} alt="sing up image"/></figure>
                        <a href="/signin" class="signup-image-link">Admin-Login</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Welcome To Parcel Manager </h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="SearchKey"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="searchkey" id="searchkey" placeholder="Enter ID to check" value={this.state.searchkey} onChange={this.SearchHandler} />
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Find Parcel Details" onClick={this.handleClick}/>
                            {/* FInd parcel details and got to '/record-view'  url with data */}
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
}

export default First;