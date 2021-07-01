import axios from "axios"
export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employer/getall");
    }
    getEmployerById(id){
        return axios.get("http://localhost:8080/api/employer/getbyid?id="+id);
    }
    updateEmployer(values){
        return axios.post("http://localhost:8080/api/employer/update",values).then(response => {console.log(response)}).catch(error=>{console.log(error.response)});
    }
}