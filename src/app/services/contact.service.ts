import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl="https://localhost:44318/api/contact/"
  constructor(private httpClient:HttpClient) { }

  add(contact:Contact){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",contact);
  }
}
