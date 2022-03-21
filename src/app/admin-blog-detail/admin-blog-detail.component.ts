import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  InsertHtml,
  RichTextEditorComponent,
} from '@syncfusion/ej2-angular-richtexteditor';
import { ToastrService } from 'ngx-toastr';
import { BlogCategory } from '../models/blog-category';
import { SingleBlog } from '../models/singleBlog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-admin-blog-detail',
  templateUrl: './admin-blog-detail.component.html',
  styleUrls: ['./admin-blog-detail.component.css'],
})
export class AdminBlogDetailComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private toast: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  @ViewChild('exampleRTE')
  public componentObject!: RichTextEditorComponent;
  private buttonElement!: HTMLElement | null;
  public htmlContent!: string;
  getFormattedContent() {
    this.buttonElement = document.getElementById('button');
    this.htmlContent = this.componentObject.getHtml();
    console.log(this.htmlContent);
  }

  htmlToAdd = '<div class="two">two</div>';

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

  id: string;
  imageId: number;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        this.imageId = params['imageId'];
        this.getBlogById(params['id']);
      }
    });



    this.getBlogForm();
    this.getCategory();
  }

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

  blog: SingleBlog;
  blogForm: FormGroup;

  getBlogForm() {
    this.htmlContent = this.blog?.text;
    this.blogForm = this.formBuilder.group({
      header: ['Başlık', Validators.required],
      text: [this.htmlContent, Validators.required],
      shortText: ['Kısa açıklama', Validators.required],
      // addDate: ['', Validators.required],
      // updateDate: ['', Validators.required],
      categoryId: ['', Validators.required],
      view: ['', Validators.required],
    });
  }

  add() {
    this.buttonElement = document.getElementById('button');
    this.htmlContent = this.componentObject.getHtml();
    console.log(this.htmlContent);
    this.blog = {
      imageId: this.blog?.imageId,
      images: [],
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

    this.blogService.update(data).subscribe((response) => {
      this.toast.success('Blog başarıyla güncellendi.', 'Başarılı');
    });
  }

  file: File;
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  loading: boolean = false;
  onUpload() {
    this.loading = !this.loading;
    this.blogService.upload(this.file, this.id).subscribe((event: any) => {
      if (typeof event === 'object') {
        this.loading = false;
      }
    });
  }

  deleteBlogImage() {
    this.blogService
      .deleteImage(this.blog.imageId.toString())
      .subscribe((response) => {
        this.toast.success('Resim başarıyla silindi.', 'Başarılı');
      });
  }

  // table=[
  //   {
  //     id:1,
  //   },
  //   {
  //     id:2,
  //   },
  //   {
  //     id:3,
  //   }
  // ]
  // test(){
  //  for (let i = 0; i < this.table.length; i++) {
  //    const element = this.table[i];
  //    console.log(this.table[i].id);
  //  }
  // }

  getBlogById(id: number) {
    this.blogService.getBlogById(id).subscribe((response) => {
      this.blog = response.data[0];
      console.log(this.blog);
      this.htmlContent = this.blog.text;
      console.log(this.htmlContent);
      console.log(this.blog.imageId);
    });
  }
}
