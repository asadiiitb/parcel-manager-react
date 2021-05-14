import axios from "axios";
const Admin_API = "http://localhost:8095/showadmins";
class AdminService {
    getAdmins() {
        return axios.get(Admin_API);
    }
}
export default new AdminService();
