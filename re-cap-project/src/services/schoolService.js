
import axios from "axios"
export default class SchoolService{
    updateSchool(values){
        return axios.post("http://localhost:8080/api/school/update",values);
    }
    getAll(){
        return axios.get("http://localhost:8080/api/school/getall");
    }
    getById(id){
        return axios.get("http://localhost:8080/api/school/getAllByJobSeekerId?id="+id);
    }
}