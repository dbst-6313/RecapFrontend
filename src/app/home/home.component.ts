import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faBook, faCity, faCoffee, faDroplet, faDropletSlash, faEye, faEyeSlash, faHeart, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AdvertService } from '../services/advert.service';
import { AdvertDto } from '../models/advertDto';
import { BlogService } from '../services/blog.service';
import { BlogDetail } from '../models/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  like = faHeart
  city = faCity
  faBook = faBook
  faEyes= faEye
  baseImageUrl="https://localhost:44318"
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  slides = [
    {id: "1", img: "a"},
    {id:" 2", img: "a"},
    {id: "3", img: "a"},
    {id: "4", img: "a"},
    {id: "5", img: "a"},
    {id: "6", img: "a"},
    {id: "6", img: "a"}
  ];
  constructor(private advertService:AdvertService,
    private blogService:BlogService) { }

  ngOnInit(): void {
    this.getAdvert();
    this.getBlog()
  }

  blog:BlogDetail[]
  getBlog(){
    this.blogService.getAllBlogs().subscribe(data=>{
      this.blog=data.data;
      console.log(this.blog);
      
    });
  }

  advertDto:AdvertDto[]=[];
  getAdvert(){
    this.advertService.getAdverts().subscribe(data=>{
      this.advertDto=data.data;
      console.log(this.advertDto);
      
    });
  }

}
