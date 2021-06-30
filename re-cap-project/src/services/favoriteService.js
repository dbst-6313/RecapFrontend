import axios from "axios"
export default class FavoriteService{
    getById(id){
        return axios.get("http://localhost:8080/api/favorite/getByUserId?userId="+id);
    }
    addFavorite(values){
        return axios.post("http://localhost:8080/api/favorite/add",values);
    }
  
}