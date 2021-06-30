
import axios from "axios"
export default class ProgrammingSkillService{
    updateProgrammingSkill(values){
        return axios.post("http://localhost:8080/api/programmingskill/update",values);
    }
    getAll(){
        return axios.get("http://localhost:8080/api/programmingskill/getall");
    }
    getById(id){
        return axios.get("http://localhost:8080/api/programmingskill/getAllByJobSeekerId?id="+id);
    }
}