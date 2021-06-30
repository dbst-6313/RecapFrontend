import axios from "axios"
export default class ImageService{
    updateImage(values){
        return axios.post("http://localhost:8080/api/image/update",values);
    }
    getAll(){
        return axios.get("http://localhost:8080/api/image/getall");
    }
    getById(id){
        return axios.get("http://localhost:8080/api/image/getAllByJobSeekerId?id="+id);
    }
}