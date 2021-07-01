
import axios from "axios"
export default class VerificationPendingEmployerService{

    getAll(){
        return axios.get("http://localhost:8080/api/verificationpendingemployer/getall");
    }
    getById(id){
        return axios.get("http://localhost:8080/api/verificationpendingemployer/getbyid?id="+id);
    }
    add(values){
        return axios.post("http://localhost:8080/api/verificationpendingemployer/add",values).then(response => {console.log(response)}).catch(error=>{console.log(error.response)})
    }
    delete(values){
        return axios.post("http://localhost:8080/api/verificationpendingemployer/delete",values).then(response => {console.log(response)}).catch(error=>{console.log(error.response)})
    }
}