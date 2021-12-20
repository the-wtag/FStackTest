import http from "../http-common";

class UserService {
    login(data) {
        return http.post("/auth/signin", data);
    }
}
export default new UserService();
