import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBlog, faBook } from '@fortawesome/free-solid-svg-icons';
import { BlogDetail } from '../models/blog';
import { BlogCategory } from '../models/blog-category';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {}
  blogIcon = faBook;
  baseImageUrl = 'https://localhost:44318';
  page: number = 1;
  filterBlog = '';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getBlogByCategoryId(params['id']);
        this.getRecent()
      } else {
        this.getAllBlogs();
      }
    });
    this.getAllBlogsCategory();
  }

  blogCategory: BlogCategory[];
  getAllBlogsCategory() {
    this.blogService.getAllBlogCategory().subscribe((response) => {
      this.blogCategory = response.data;
    });
  }

  currentCategory: BlogCategory;
  setCurrentCategory(category: BlogCategory) {
    this.currentCategory = category;
    this.router.navigate(['/blog/category/',category.id]);
  }

  getBlogByCategoryId(id: number) {
    this.blogService.getBlogByCategoryId(id).subscribe((response) => {
      this.blog = response.data;
    });
  }

  currentBlog: BlogDetail;
  setCurrentBlog(blog: BlogDetail) {
    this.currentBlog = blog;
    console.log(this.currentBlog);
  }

  getRecent(){
    this.blogService.getAllBlogs().subscribe((response) => {
      this.recent=response.data
      this.recent = this.recent.slice(0, 3);
      console.log(this.recent);
    });
  }

  blog: BlogDetail[] = [];
  recent: BlogDetail[] = [];
  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe((response) => {
      this.blog = response.data;
      this.recent = this.blog.slice(0, 3);      
    });
  }
}
