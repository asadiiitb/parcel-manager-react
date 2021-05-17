import {React,Fragment, Component} from 'react'
import sign_up from "./images/signup-image.jpg"
import sign_in from "./images/signin-image.jpg"
import Admin_Signin from "./Admin-Signin"
import {Link} from 'react-router-dom';
import ListRecords from "./ListRecords"
import axios from "axios";
import "./css/style.css"

class First extends Component {
     constructor(props) {
        super(props);
        this.state = {
            searchKey: "",
        }
        this.SearchHandler=this.SearchHandler.bind(this)
        }    
        SearchHandler= (event) => {
            this.setState({searchKey: event.target.value});
            // console.log(event.target.value);
            // console.log("hell");
            localStorage.setItem("searchKeylocal",event.target.value);
            console.log(localStorage.searchKeylocal);
            // sessionStorage.setItem("track","999");
        }
        handleClick= (event) =>{
            event.preventDefault();
            let track=sessionStorage.getItem("track");
            let parcel = {

                searchKey: this.state.searchKey
            }
            // https://github.com/asadiiitb/parcel-manager-react/tree/main/{abc}
            localStorage.setItem("searchKeylocal",parcel.searchKey);
            console.log(parcel.searchKey);
            console.log(this.searchKey);
            console.log(localStorage.searchKeylocal);
            this.props.history.push('/recordPage');
            {/*axios.get('http://localhost:8095/record?id=999')
                .then(response =>{
                    console.log(response);
                    console.log(response.data);
                    {
                        console.log("found");
                        alert('found');
                    }
                })
                .catch(error =>{
                    console.log(error)
                })
            */}
            
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
                                <label for="searchKey"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="searchKey" id="searchKey" placeholder="Enter ID to check" value={this.state.searchKey} onChange={this.SearchHandler} />
                            </div>

                             


                           <div class="form-group form-button">
                                 <Link to="/recordPage" className="btn btn-primary">Record View</Link>
                             </div>



                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    		
       	</Fragment>
    	)

    }
}

export default First;