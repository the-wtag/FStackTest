import axios from 'axios';
const API_URL = 'http://localhost:8080/api/auth/';

class UserService {
    login(data) {
        console.log(data);
        return axios
            .post(API_URL+"signin", data)
            .then(response => {
                if(response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }
}
export default new UserService();
