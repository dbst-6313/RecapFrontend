import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDetail } from '../models/blog';
import { BlogCategory } from '../models/blog-category';
import { BlogImage } from '../models/blogImage';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleBlog } from '../models/singleBlog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUrl = 'https://localhost:44318/api/blog/';
  apiUrl2 = 'https://localhost:44318/api/blogcategory/';
  apiUrl3='https://localhost:44318/api/blogimage/'
  constructor(private httpClient: HttpClient) {}

  getAllBlogs(): Observable<ListResponseModel<BlogDetail>> {
    let newPath = this.apiUrl + 'getalldetails';
    return this.httpClient.get<ListResponseModel<BlogDetail>>(newPath);
  }

  getBlog(): Observable<ListResponseModel<SingleBlog>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<SingleBlog>>(newPath);
  }
  getAllBlogCategory(): Observable<ListResponseModel<BlogCategory>> {
    let newPath = this.apiUrl2 + 'getall';
    return this.httpClient.get<ListResponseModel<BlogCategory>>(newPath);
  }
  add(blog: SingleBlog) {
    return this.httpClient.post<SingleBlog>(this.apiUrl + 'add', blog);
  }
  update(blog:SingleBlog){
    return this.httpClient.post<SingleBlog>(this.apiUrl + 'update', blog);
  }
  delete(blog: SingleBlog) {
    return this.httpClient.post<SingleBlog>(this.apiUrl + 'delete', blog);
  }

  getBlogById(id: number): Observable<ListResponseModel<BlogDetail>> {
    let newPath = this.apiUrl + 'getalldetailsbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<BlogDetail>>(newPath);
  }

  getBlogByCategoryId(id: number) {
    let newPath = this.apiUrl + 'getalldetailsbycategory?categoryId=' + id;
    return this.httpClient.get<ListResponseModel<BlogDetail>>(newPath);
  }

  upload(file:any,id:string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('blogImage.BlogId', id);
    return this.httpClient.post<any>(this.apiUrl3 + 'add', formData);
  }

  getImageById(id:number){
    let newPath = this.apiUrl3 + 'getbyid?id=' + id;
    return this.httpClient.get<BlogImage>(newPath);
  }

  deleteImage(id:string){
    const formData=new FormData();
    formData.append('id',id);
    return this.httpClient.post<any>(this.apiUrl3 + 'delete',formData);
  }
 
}
