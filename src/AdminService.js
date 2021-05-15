import axios from "axios";
const Admin_API = "http://localhost:8095";
class AdminService {
    getAdmins() {
    	console.log();
        return axios.get(Admin_API.concat("/showadmins"));
    }
    viewRecords() {
    	console.log();
        return axios.get(Admin_API.concat("/viewrecords"));
    }
}
export default new AdminService();
