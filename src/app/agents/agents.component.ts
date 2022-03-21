import { Component, OnInit } from '@angular/core';
import { AdvertCategory } from '../models/advertCategory';
import { AdvertService } from '../services/advert.service';
import { faBlog, faBook, faLink } from '@fortawesome/free-solid-svg-icons';
import { AgentService } from '../services/agent.service';
import { AgentDetail } from '../models/agentsDetail';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  faYoutube = faLink;
  constructor(private advertService:AdvertService,
    private agentService:AgentService) { }
  ngOnInit(): void {
    this.getAdvertsCategory()
    this.getAgent()
  }
 
  advertCategory:AdvertCategory[]
  getAdvertsCategory(){
    this.advertService.getAdvertCategory().subscribe((data)=>{
      this.advertCategory=data.data;
      console.log(this.advertCategory);
      
    });
  }

  agentDto:AgentDetail[]
  getAgentDetails(id:number){
   this.agentService.getAgentsDetail(id).subscribe((data)=>{
   this.agentDto=data.data
   console.log(this.agentDto);
  });
  }

  getAgent(){
    this.agentService.getAgents().subscribe((data)=>{
      this.agentDto=data.data
      console.log(this.agentDto);
     });
  }

}
