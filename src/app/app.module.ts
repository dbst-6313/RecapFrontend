import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BlogPipe } from './pipe/blog.pipe';
import { PropertyPipe } from './pipe/property.pipe';
import { HtmlEditorService, ImageService, LinkService, RichTextEditorAllModule, RichTextEditorModule, Toolbar, ToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { AdminComponent } from './admin/admin.component';
import { AdminBlogDetailComponent } from './admin-blog-detail/admin-blog-detail.component';
import { AdminAdvertDetailComponent } from './admin-advert-detail/admin-advert-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogPipe,
    PropertyPipe,
    AdminComponent,
    AdminBlogDetailComponent,
    AdminAdvertDetailComponent,
    ContactComponent,
    AgentsComponent,
    AgentDetailComponent,
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxPaginationModule,
    RichTextEditorModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
    }),
  ],
  providers: [ToolbarService,LinkService,ImageService,HtmlEditorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
