import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Advert } from '../models/adverts';
import { AdvertDto } from '../models/advertDto';
import { AdvertCategory } from '../models/advertCategory';
import { AgentDetail } from '../models/agentsDetail';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  apiUrl="https://localhost:44318/api/advert/"
  apiUrl2="https://localhost:44318/api/advertcategory/"
  apiUrl3="https://localhost:44318/api/advertimage/"
  apiUrl4="https://localhost:44318/api/agent/"

  constructor(private httpClient:HttpClient) { }

  getAdverts():Observable<ListResponseModel<AdvertDto>>{
      let newPath=this.apiUrl+"getalldetails";
      return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }
  getAgents():Observable<ListResponseModel<AgentDetail>>{
    let newPath=this.apiUrl4+"getalldetails";
    return this.httpClient.get<ListResponseModel<AgentDetail>>(newPath);
  }

  getAdvertsAsc():Observable<ListResponseModel<AdvertDto>>{
    let newPath=this.apiUrl+"getallbyasc";
    return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  } 

  delete(advert:Advert){
    return this.httpClient.post<Advert>(this.apiUrl+'delete',advert);
  }

  getAdvertDsc():Observable<ListResponseModel<AdvertDto>>{
    let newPath=this.apiUrl+"getallbydsc";
    return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }

  getAdvertCategory():Observable<ListResponseModel<AdvertCategory>>{
    let newPath=this.apiUrl2+"getall";
    return this.httpClient.get<ListResponseModel<AdvertCategory>>(newPath);
  }

  getAdvertById(id:number){
    let newPath=this.apiUrl+"getalldetailsbyid?id="+id;
    return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }

  getAdvertByCategoryId(id:number){
    let newPath =this.apiUrl+"getalldetailsbycategory?categoryId="+id;
    return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }
  add(advert:Advert){
    return this.httpClient.post<Advert>(this.apiUrl+'add',advert);
  }
  update(advert:Advert){
    return this.httpClient.post<Advert>(this.apiUrl+'update',advert);
  }


  upload(file:any,id:string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('AdvertImage.AdvertId', id);
    return this.httpClient.post<any>(this.apiUrl3 + 'add', formData);
  }

  getImageById(id:number){
    let newPath = this.apiUrl3 + 'getbyid?id=' + id;
    return this.httpClient.get<Advert>(newPath);
  }

  deleteImage(id:string){
    const formData=new FormData();
    formData.append('id',id);
    return this.httpClient.post<any>(this.apiUrl3 + 'delete',formData);
  }

}
