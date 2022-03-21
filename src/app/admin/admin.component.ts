import { AgentService } from './../services/agent.service';
import { AgentDetail } from './../models/agentsDetail';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToastrService } from 'ngx-toastr';
import { AdvertCategory } from '../models/advertCategory';
import { AdvertDto } from '../models/advertDto';
import { Advert } from '../models/adverts';
import { BlogDetail } from '../models/blog';
import { BlogCategory } from '../models/blog-category';
import { SingleBlog } from '../models/singleBlog';
import { AdvertService } from '../services/advert.service';
import { BlogService } from '../services/blog.service';
import { faBook, faCity, faCoffee, faDroplet, faDropletSlash, faEye, faEyeSlash, faHeart, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Agent } from '../models/agent';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private toast: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private agentService:AgentService,
    private advertService:AdvertService
  ) {}
  @ViewChild('editor')
  public advertObject!: RichTextEditorComponent;
  private advertContent!: string;
  getFormatteAdvert() {
    this.buttonElement = document.getElementById('button');
    this.advertContent = this.advertObject.getHtml();
    console.log(this.advertContent);
  }


  @ViewChild('exampleRTE')
  public componentObject!: RichTextEditorComponent;
  private buttonElement!: HTMLElement | null;
  private htmlContent!: string;
  getFormattedContent() {
    this.buttonElement = document.getElementById('button');
    this.htmlContent = this.componentObject.getHtml();
    console.log(this.htmlContent);
  }



  public tools: object = {
    type: 'Expand',
    items: [
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      'LowerCase',
      'UpperCase',
      '|',
      'Formats',
      'Alignments',
      'OrderedList',
      'UnorderedList',
      'Outdent',
      'Indent',
      '|',
      'CreateLink',
      'Image',
      '|',
      'ClearFormat',
      'Print',
      'SourceCode',
      'FullScreen',
      '|',
      'Undo',
      'Redo',
    ],
  };

  ngOnInit(): void {
    this.getBlogForm();
    this.getCategory();
    this.getAdvertForm()
    this.getAgentForm();
    this.getAdvertCategory()
    this.getAdvert()
    this.getBlog()
    this.urlController()
    this.getAgents();
  }

  urlController() {
    this.blogService.getAllBlogs().subscribe((response) => {
      this.blogLengthController = response.data;
      let test = this.blogLengthController.length;
      let lastId = this.blogLengthController[0].id;
      for (let i = 0; i < this.blogLengthController.length; i++) {
        if (this.blogLengthController[i].id > lastId) {
          lastId = this.blogLengthController[i].id;
        }
      }
      console.log(lastId);
    });
  }

  currentNumber: number = 2;
  setCurrentNumber(number: number) {
    this.currentNumber = number;
    console.log(this.currentNumber);
  }

  blogForm: FormGroup;

  getBlogForm() {
    this.blogForm = this.formBuilder.group({
      header: ['', Validators.required],
      text: ['', Validators.required],
      shortText: ['', Validators.required],
      // addDate: ['', Validators.required],
      // updateDate: ['', Validators.required],
      categoryId: ['', Validators.required],
      view: ['', Validators.required],
    });
  }


agentForm:FormGroup;

getAgentForm(){
  this.agentForm = this.formBuilder.group({
    name:['',Validators.required],
    role:['',Validators.required],
    officeNumber:['',Validators.required],
    mobileNumber:['',Validators.required],
    email:['',Validators.required],
    linkedinLink:['',Validators.required],
    twitterLink:['',Validators.required],
    instagramLink:['',Validators.required],
    youtubeLink:['',Validators.required],
    description:['',Validators.required],
  })
}

agent:Agent
  agentAdd(){

    this.agent={
      name:this.agentForm.value.name,
      id:this.agent?.id,
    role:this.agentForm.value.role,
    officeNumber:this.agentForm.value.officeNumber,
    mobileNumber:this.agentForm.value.mobileNumber,
    email:this.agentForm.value.email,
    linkedinLink:this.agentForm.value.linkedinLink,
    twitterLink:this.agentForm.value.twitterLink,
    instagramLink:this.agentForm.value.instagramLink,
    youtubeLink:this.agentForm.value.youtubeLink,
    description:this.agentForm.value.description,
    }
    console.log(this.advert);
    let data=Object.assign({},this.agent );
    console.log(data);
    this.agentService.add(data).subscribe((response)=>{
      this.toast.success('Emlak başarıyla eklendi emlağa resim eklemeyi unutmayınız!', 'Başarılı');
      alert('Emlak başarıyla eklendi emlağa resim eklemeyi unutmayınız!');
    })
  }

  advertForm: FormGroup;
  getAdvertForm() {
    this.advertForm=this.formBuilder.group({
      title: ['', Validators.required],
      // likeCount: ['', Validators.required],
      price: ['', Validators.required],
      buildTime: ['', Validators.required],
      shortDescription: ['', Validators.required],
      advertCategoryId: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      youtubeVideoLink: ['', Validators.required],
      agentId:['',Validators.required],
      detailDescription: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  advertCategory:AdvertCategory[]
  getAdvertCategory(){
    this.advertService.getAdvertCategory().subscribe((response)=>{
      this.advertCategory=response.data;
      console.log(this.advertCategory);

    })
  }

  advertCurrent:Advert
  setCurrentAdvert(adverts: Advert) {
    this.advertCurrent=adverts;
    console.log(this.advertCurrent);
  }

  blogCurrent:SingleBlog
  setCurrentBlog(blogs:SingleBlog){
    this.blogCurrent=blogs;
    console.log(this.blogCurrent);
  }

  blogDelete(){
    this.blogService.delete(this.blogCurrent).subscribe((response)=>{
      this.toast.success('Blog başarıyla silindi', 'Başarılı');
    })
  }

  advertDelete(){
    this.advertService.delete(this.advertCurrent).subscribe((response)=>{
      this.toast.success('Emlak başarıyla silindi', 'Başarılı');
    })
  }

  blogLengthController:SingleBlog[]
  blog: SingleBlog;
  add() {
    this.buttonElement = document.getElementById('button');
    this.htmlContent = this.componentObject.getHtml();
    console.log(this.htmlContent);
    this.blog = {
      images: [],
      imageId:this.blog?.imageId,
      id: this.blog?.id,
      header: this.blogForm.value.header,
      text: this.htmlContent,
      shortText: this.blogForm.value.shortText,
      addDate: this.blog?.addDate,
      categoryId: this.blogForm.value.categoryId,
      view: this.blog?.view,
    };
    console.log(this.htmlContent);

    let data = Object.assign({}, this.blog, this.blogForm.value.categoryId);
    console.log(data);

    this.blogService.getBlog().subscribe((response) => {
      this.blogLengthController = response.data;
      let lastId = this.blogLengthController[0].id;
      for (let i = 0; i < this.blogLengthController.length; i++) {
        if (this.blogLengthController[i].id > lastId) {
          lastId = this.blogLengthController[i].id+1;
        }
      }
      console.log(lastId);


    this.blogService.add(data).subscribe((response) => {
      this.toast.success(
        'Blog başarıyla eklendi.Bloga resim eklemeyi unutmayınız!','Başarılı'
      );
      this.blogForm.reset();
      setTimeout(() => {
        lastId+=1
        this.router.navigate(['/admin/blog-detail/' + lastId]);
      }, 2000);
      alert('Blog başarıyla eklendi.Bloga resim eklemeyi unutmayınız!');
    });
  });
  }



  advert:Advert
  advertAdd(){
    this.advertContent = this.advertObject.getHtml();
    this.advert={
      agentId:this.advertForm.value.agentId,
      images:this.advert?.images,
      imageId:this.advert?.imageId,
      id:this.advert?.id,
      title:this.advertForm.value.title,
      likeCount:1,
      price:this.advertForm.value.price,

      buildTime:this.advertForm.value.buildTime,
      shortDescription:this.advertForm.value.shortDescription,
      advertCategoryId:this.advertForm.value.advertCategoryId,
      location:this.advertForm.value.location,
      description:this.advertContent,
      youtubeVideoLink:this.advertForm.value.youtubeVideoLink,
      detailDescription:this.advertForm.value.detailDescription,
      city:this.advertForm.value.city,
    }
    console.log(this.advert);
    let data=Object.assign({},this.advert,this.advertForm.value.advertCategoryId,this.advertForm.value.agentId );
    console.log(data);
    this.advertService.add(data).subscribe((response)=>{
      this.toast.success('Emlak başarıyla eklendi emlağa resim eklemeyi unutmayınız!', 'Başarılı');
      alert('Emlak başarıyla eklendi emlağa resim eklemeyi unutmayınız!');
    })
  }

  adverts:AdvertDto[]
  getAdvert(){
    this.advertService.getAdverts().subscribe((response)=>{
      this.adverts=response.data;
      console.log(this.adverts);
    })
  }
agents:Agent[]
getAgents(){
  this.agentService.getAllAgents().subscribe((response)=>{
    this.agents = response.data;
    console.log("a")
  })
}
  blogs:BlogDetail[]
  getBlog(){
    this.blogService.getAllBlogs().subscribe((response)=>{
      this.blogs=response.data;
      console.log(this.blogs);
    })
  }

    dizi=[10,52,25,62,45,36,3,33,41,30];
   enBuyuk=this.dizi[0];
  test(){
  for(var i=0;i<this.dizi.length;i++){
      if(this.dizi[i]>this.enBuyuk)
      {
        this.enBuyuk=this.dizi[i];
      }
  }
  alert(this.enBuyuk);
}


//   test1:BlogDetail[]
//   dizi=[10,52,25,62,45,36,3,33,41,30];
//   enBuyuk=this.test1[0];
//  test(){
//  for(var i=0;i<this.dizi.length;i++){
//      if(this.test1[i]>this.enBuyuk)
//      {
//        this.enBuyuk=this.dizi[i];
//      }
//  }
//  alert(this.enBuyuk);
// }



  back() {
    this.router.navigate(['/']);
  }

  category: BlogCategory[];
  getCategory() {
    this.blogService.getAllBlogCategory().subscribe((response) => {
      this.category = response.data;
      console.log(this.category);
    });
  }
}
