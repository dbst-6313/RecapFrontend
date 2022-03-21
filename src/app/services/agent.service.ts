import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../models/agent';
import { AgentDetail } from '../models/agentsDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  apiUrl="https://localhost:44318/api/agent/"
  constructor(private httpClient:HttpClient) { }

  getAgentsDetail(id:number):Observable<ListResponseModel<AgentDetail>>{
    let newPath=this.apiUrl+"getalldetailsbyid?id="+id;
    return this.httpClient.get<ListResponseModel<AgentDetail>>(newPath);
  }

  getAgents():Observable<ListResponseModel<AgentDetail>>{
    let newPath=this.apiUrl+"getalldetails";
    return this.httpClient.get<ListResponseModel<AgentDetail>>(newPath);
  }
  getAllAgents():Observable<ListResponseModel<Agent>>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Agent>>(newPath);
  }
  add(agent: Agent) {
    return this.httpClient.post<Agent>(this.apiUrl + 'add', agent);
  }
  getAgentById(id:number){
    let newPath=this.apiUrl+"getbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<AgentDetail>>(newPath);
  }




}
