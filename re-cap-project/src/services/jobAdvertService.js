import axios from "axios"
export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getActiveAdverts")
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobadvert/addAdvert",values).then(response => {console.log(response)}).catch(error=>{console.log(error.response)})
    }
    activateJobAdvert(id){
        return axios.post("http://localhost:8080/api/jobadvert/activateAdvert?id="+id);
    }
    getNotActiveAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getNotActiveAdverts");
    }
}