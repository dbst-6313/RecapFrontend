import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AdvertDto } from '../models/advertDto';
import { AdvertService } from '../services/advert.service';
import {
  faArrowDown,
  faArrowUp,
  faCity,
  faCoffee,
  faDroplet,
  faDropletSlash,
  faHeart,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { AdvertCategory } from '../models/advertCategory';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  like = faHeart;
  city = faCity;
  up = faArrowUp;
  down = faArrowDown;
  page: number = 1;
  filterProperty: '';
  constructor(
    private advertService: AdvertService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  baseImageUrl = 'https://localhost:44318';
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
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getAdvertByCategoryId(params['id']);
      } else {
       
      }
    });
    this.getAdvert();
    this.getAdvertCategory();
  }

  currentCategory: AdvertCategory;
  setCurrentCategory(category:AdvertCategory){
    this.currentCategory = category;
    console.log(this.currentCategory);
    this.router.navigate(['/property',category.id]);
  }

  getAdvertByDsc() {
    this.advertService.getAdvertDsc().subscribe((response) => {
      this.advertDto = response.data;
      console.log(this.advertDto);
      this.toastr.success('Ürün fiyatları azdan çoğa listelendi', 'Başarılı');
    });
  }

  currentItem: number = 1;
  setCurrentItem(item: number) {
    this.currentItem = item;
    console.log(this.currentItem);
  }

  getAdvertByCategoryId(id: number) {
    this.advertService.getAdvertByCategoryId(id).subscribe((data) => {
      this.advertDto = data.data;
      console.log(this.advertDto);
    });
  }

  getAdvertByAsc() {
    this.advertService.getAdvertsAsc().subscribe((data) => {
      this.advertDto = data.data;
      console.log(this.advertDto);
      this.toastr.success('Ürün fiyatları çoktan aza listelendi', 'Başarılı');
    });
  }

  category: AdvertCategory[];
  getAdvertCategory() {
    this.advertService.getAdvertCategory().subscribe((data) => {
      this.category = data.data;
      console.log(this.category);
    });
  }
   
  advertDto: AdvertDto[] = [];
  getAdvert() {
    this.advertService.getAdverts().subscribe((data) => {
      this.advertDto = data.data;
    
      console.log(this.advertDto);
    });
  }
}
