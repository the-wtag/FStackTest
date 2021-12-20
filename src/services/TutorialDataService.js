import http from "../http-common";
import authHeader from "./auth-header";

class TutorialDataService {
    getAll() {
        return http.get("/tutorials");
    }

    get(id) {
        return http.get(`/tutorials/${id}`);
    }

    create(data) {
        return http.post("/tutorials", data, {headers: authHeader()});
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`, data, {headers: authHeader()});
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`, {headers: authHeader()});
    }

    deleteAll() {
        return http.delete(`/tutorials`, {headers: authHeader()});
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
}

export default new TutorialDataService();
