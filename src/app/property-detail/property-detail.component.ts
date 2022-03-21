import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { AdvertDto } from '../models/advertDto';
import { AdvertService } from '../services/advert.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  sendForm: FormGroup;
  faPlay = faPlay;
  faArrowleft=faArrowLeft
  faArrowRight=faArrowRight
  baseImageUrl = 'https://localhost:44318';
  constructor(
    private formBuilder: FormBuilder,
    private advertService: AdvertService,
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private toastService:ToastrService
  ) {}
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
  slides = [
    { id: '1', img: 'a' },
    { id: ' 2', img: 'a' },
    { id: '3', img: 'a' },
    { id: '4', img: 'a' },
    { id: '5', img: 'a' },
    { id: '6', img: 'a' },
    { id: '6', img: 'a' },
  ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.advertDetal(params['id']);
      }
    });
    this.sendFormFunction();
  }

  advertDto: AdvertDto;
  advertDtoImage: AdvertDto[] = [];
  advertDetal(id: number) {
    this.advertService.getAdvertById(id).subscribe((response) => {
      this.advertDto = response.data[0];
      this.advertDtoImage = response.data;
      console.log(this.advertDto);
      console.log(this.advertDtoImage);
    });
  }

  sendFormFunction() {
    this.sendForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  sendAdd() {
    if (this.sendForm.valid) {
      let data = Object.assign({}, this.sendForm.value);
      console.log(data);
      this.contactService.add(data).subscribe((response) => {
        this.toastService.success('Mesajınız başarıyla gönderildi.', 'Başarılı');
      });
    } else {
      this.toastService.error('Form boş','Hata');
    }
  }
}
