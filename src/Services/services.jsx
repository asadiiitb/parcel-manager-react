import axios from "axios";
const Admin_API = "http://localhost:8095";
class service {
// Method 1 to get all the admins
    getAdmins() {
    	console.log();
        return axios.get(Admin_API.concat("/showadmins"));
    }


    addAdmin(user){
        console.log(user)
        return axios.post(USER_API_BASE_URL.concat("/register"),user);
    }

    addRecord(record){
        console.log(record)
        return axios.post(USER_API_BASE_URL.concat("/addrecord"),user);
    }

    viewRecords() {
    	console.log();
        return axios.get(Admin_API.concat("/viewrecord"));
    }


    validateUser = async (email,password) => {

        const USER_API_BASE_URL = "http://localhost:8084/api/v1/login";
          
        const response = await axios.get(USER_API_BASE_URL + '/' + email);
          
        let res = response.data;

        if(res.password == password)
        {
            console.log(res);
            let data = {email:res.emailId, password:res.password, firstname:res.firstName, lastname:res.lastName};
            sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,JSON.stringify(data));
            sessionStorage.setItem("id",res.id);
            console.log(JSON.parse(sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)));
            return true;
        }
      }
      isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        if(user.email == null) return false;
        else return true;
    }

    getLoggedInUserId() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user.email == null) return '';
        else return user.id;

    }

    viewRecords() {
    	console.log();
        return axios.get(Admin_API.concat("/viewrecord"));
    }


}
export default new service();