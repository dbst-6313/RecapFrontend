import axios from "axios"
export default class JobAdvertService{
    getJobAdverts(pageNo,pageSize){
        return axios.get("http://localhost:8080/api/jobadvert/getActiveAdverts?pageNo="+pageNo+"&pageSize="+pageSize);
    }
    getAllJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getAll")
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobadvert/addAdvert",values).then(response => {console.log(response)}).catch(error=>{console.log(error.response)})
    }
    delete(id){
        return axios.post("http://localhost:8080/api/jobadvert/deleteAdvert?id="+id)
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobadvert/getbyid?id="+id);
    }
    activateJobAdvert(id){
        return axios.post("http://localhost:8080/api/jobadvert/activateAdvert?id="+id);
    }
    getNotActiveAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getNotActiveAdverts");
    }
    getByCityId(id){
        return axios.get("http://localhost:8080/api/jobadvert/getByCityId?id="+id);
    }
    getByWorkTypeId(id){
        return axios.get("http://localhost:8080/api/jobadvert/getByWorkTypeId?id="+id);
    }
    getByWorkTypeIdAndCityId(cityId,workTypeId){
        return axios.get("http://localhost:8080/api/jobadvert/getByCityAndWorkTypeId?cityId="+cityId+"&workTypeId="+workTypeId);
    }
}