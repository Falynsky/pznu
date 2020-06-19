import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ResearchPageComponent} from "./research-page/research-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {SubjectPageComponent} from './subject-page/subject-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'research_topics', component: ResearchPageComponent},
  {path: 'subjects', component: SubjectPageComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
