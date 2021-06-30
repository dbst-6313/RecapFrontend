import axios from "axios"
export default class LinkService{
    updateLink(values){
        return axios.post("http://localhost:8080/api/link/update",values);
    }
    getAll(){
        return axios.get("http://localhost:8080/api/link/getall");
    }
    getById(id){
        return axios.get("http://localhost:8080/api/link/getAllByJobSeekerId?id="+id);
    }
}