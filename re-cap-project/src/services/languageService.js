import axios from "axios"
export default class LanguageService{
    updateLanguage(values){
        return axios.post("http://localhost:8080/api/language/update",values);
    }
    getAll(){
        return axios.get("http://localhost:8080/api/language/getall");
    }
    getById(id){
        return axios.get("http://localhost:8080/api/language/getAllByJobSeekerId?id="+id);
    }
}