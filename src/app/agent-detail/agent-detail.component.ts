import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentDetail } from '../models/agentsDetail';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css'],
})

export class AgentDetailComponent implements OnInit {
  constructor(
    private agentService: AgentService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}
  baseImageUrl = 'https://localhost:44318';

  id:number
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getAgentDetails(params['id']);
        this.getAgentById(params['id']);
        this.id=params['id'];
      }
    });
  }

  currentNumber: number = 1;
  setCurrentNumber(number: number) {
    this.currentNumber = number;
    console.log(this.currentNumber);
  }
  
  getCurrentOneClass() {
    if (this.currentNumber == 1 || this.currentNumber == 6) {
      return 'nav-link active';
    } else {
      return '';
    }
  }

  getCurrentTwoClass() {
    if (this.currentNumber == 2) {
      return 'nav-link active';
    } else {
      return '';
    }
  }

  getCurrentThreeClass() {
    if (this.currentNumber == 3) {
      return 'nav-link active';
    } else {
      return '';
    }
  }
  test:AgentDetail
  descriptionTextController(){
    this.agentService.getAgentById(this.id).subscribe((data)=>{
      this.test=data.data;
      console.log(this.test);
    if(this.test?.description.length>200){
      console.log(this.test?.description.length);
      console.log(this.test?.description.substring(0,50));
      this.test.description=this.test?.description.substring(0,50)+"...";
      // return this.test?.description.substring(0,50)+"...";
    }else{
      console.log(this.test?.description);
      // return this.test?.description;
    }  
  });
  }
  routerFunction()
  {
    this.agentService.getAgentsDetail(this.id).subscribe((data) => {
      this.agentDto = data.data;
      console.log(this.agentDto);
    });
    this.router.navigate(['/property-detail/'+this.id]);
  }
  

  agentDetail:AgentDetail
  getAgentById(id:number){
    this.agentService.getAgentById(id).subscribe((data)=>{
        this.agentDetail=data.data;
        console.log(this.agentDetail);
        
    });
  }
  agentDto: AgentDetail[];
  agentTest:AgentDetail
  getAgentDetails(id: number) {
    this.agentService.getAgentsDetail(id).subscribe((data) => {
      this.agentDto = data.data;
      this.agentTest=data.data[0]
      console.log(this.agentTest.images[0]);
      
      console.log(this.agentDto);
    });
  }
}
