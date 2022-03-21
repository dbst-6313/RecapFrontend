import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdvertDto } from '../models/advertDto';
import { AdvertService } from '../services/advert.service';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private advertService:AdvertService,
    private formBuilder:FormBuilder,
    private toastService:ToastrService,
    private contactService:ContactService,
    private activatedRoute:ActivatedRoute) { }

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

  sendForm:FormGroup
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
