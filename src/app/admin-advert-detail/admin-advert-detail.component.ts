import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToastrService } from 'ngx-toastr';
import { AdvertCategory } from '../models/advertCategory';
import { Advert } from '../models/adverts';
import { AdvertService } from '../services/advert.service';

@Component({
  selector: 'app-admin-advert-detail',
  templateUrl: './admin-advert-detail.component.html',
  styleUrls: ['./admin-advert-detail.component.css'],
})
export class AdminAdvertDetailComponent implements OnInit {
  constructor(
    private toast: ToastrService,
    private advertService: AdvertService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  @ViewChild('test')
  public advertObject!: RichTextEditorComponent;
  private buttonElement!: HTMLElement | null;
  public advertContent!: string;
  getFormattedContent() {
    this.buttonElement = document.getElementById('button');
    this.advertContent = this.advertObject.getHtml();
    console.log(this.advertContent);
  }
  baseImageUrl = 'https://localhost:44318';
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
  id: number;
  imageId:string
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.imageId = params['id'];
        this.getAdvertById(params['id']);
      }
    });
    this.getAdvertCategory();
    this.getAdvertForm();
  }

  advert: Advert;
  getAdvertById(id: number) {
    this.advertService.getAdvertById(id).subscribe((response) => {
      this.advert = response.data[0];
      console.log(this.advert);
    });
  }
  advertUpdate() {
    this.buttonElement = document.getElementById('button');
    this.advertContent = this.advertObject.getHtml();
    console.log(this.advertContent);
        this.advert = {
      imageId: this.advert.imageId,
    agentId:this.advert.agentId,
      id: this.advert?.id,
      title: this.advertForm.value.title,
      likeCount: 1,
      images:this.advert.images,
      price: this.advertForm.value.price,
      buildTime: this.advertForm.value.buildTime,
      shortDescription: this.advertForm.value.shortDescription,
      advertCategoryId: this.advertForm.value.advertCategoryId,
      location: this.advertForm.value.location,
      description: this.advertContent,
      youtubeVideoLink: this.advertForm.value.youtubeVideoLink,
      detailDescription: this.advertForm.value.detailDescription,
      city: this.advertForm.value.city,
    };
    console.log(this.advert);
    let data = Object.assign(
      {},
      this.advert,
      this.advertForm.value.advertCategoryId
    );
    console.log(data);
    this.advertService.update(data).subscribe((response) => {
      this.toast.success('Emlak başarıyla güncellendi', 'Başarılı');
    });
  }
  back() {
    this.router.navigate(['/']);
  }

  advertForm: FormGroup;
  async getAdvertForm() {
    this.advertForm = this.formBuilder.group({
      title: ['', Validators.required],
      // likeCount: ['', Validators.required],
      price: ['', Validators.required],
      buildTime: ['', Validators.required],
      shortDescription: ['', Validators.required],
      advertCategoryId: ['', Validators.required],
      agentId:['',Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      youtubeVideoLink: ['', Validators.required],
      detailDescription: ['', Validators.required],
      city: ['', Validators.required],
    });
  }


  file: File;
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  loading: boolean = false;
  onUpload() {
    this.loading = !this.loading;
    this.advertService.upload(this.file, this.imageId).subscribe(
      (event: any) => {
        if (typeof event === 'object') {
          this.toast.success('Resim başarıyla yüklendi.', 'Başarılı');
          this.getAdvertById(this.id);
          this.loading = false;
        }
      }
    );
  }

  deleteAdvertImage(){
    this.advertService.deleteImage(this.advert.imageId.toString()).subscribe((response) => {
      this.toast.success('Resim başarıyla silindi.', 'Başarılı');
     setTimeout(() => {
      window.location.reload()
     }, 1500);
    })
  }


  advertCategory: AdvertCategory[];
  getAdvertCategory() {
    this.advertService.getAdvertCategory().subscribe((response) => {
      this.advertCategory = response.data;
      console.log(this.advertCategory);
    });
  }
}
