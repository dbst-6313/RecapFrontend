import axios from "axios"
export default class JobAdvertService{
    getJobSeekers(){
        return axios.get("http://localhost:8080/api/image/getall");
    }
}