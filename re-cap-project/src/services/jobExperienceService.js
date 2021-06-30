import axios from "axios"
export default class JobExperienceService{
    updateJobExperience(values){
        return axios.post("http://localhost:8080/api/jobexperience/update",values);
    }
    getAll(){
        return axios.get("http://localhost:8080/api/jobexperience/getall");
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobexperience/getAllByJobSeekerId?id="+id);
    }
}