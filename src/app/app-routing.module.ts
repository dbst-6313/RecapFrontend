import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { AdminAdvertDetailComponent } from './admin-advert-detail/admin-advert-detail.component';
import { AdminBlogDetailComponent } from './admin-blog-detail/admin-blog-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentsComponent } from './agents/agents.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full', component: HomeComponent},
  {path:'property',component:PropertyListComponent},
  {path:'property/:id',component:PropertyListComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/category/:id',component:BlogComponent},
  {path:'blog-detail/:id',component:BlogDetailComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/blog-detail/:id',component:AdminBlogDetailComponent},
  {path:'admin/advert-detail/:id',component:AdminAdvertDetailComponent},
  {path:'contact',component:ContactComponent},
  {path:'agents',component:AgentsComponent},
  {path:'agent-detail/:id',component:AgentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
