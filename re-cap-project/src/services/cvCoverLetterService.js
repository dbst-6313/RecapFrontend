import axios from "axios"
export default class CvCoverLetterService{
    getAll(){
        return axios.get("http://localhost:8080/api/cvcoverletter/getall");
    }
    updateCvCoverLetter(values){
        return axios.post("http://localhost:8080/api/cvcoverletter/update",values);
    }
    getById(id){
        return axios.get("http://localhost:8080/api/cvcoverletter/getAllByJobSeekerId?id="+id);
    }
}