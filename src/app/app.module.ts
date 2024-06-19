import { RecService } from './rec.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ButomComponent } from './butom/butom.component';


const routes:Routes=[
  {path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent,title:'Home'},
  { path: 'Recipes', component: RecipesComponent,title:"Recipes"},
  {path:'EBooks',component:EbooksComponent,canActivate:[],title:'EBooks'},
  {path:'AboutUs',component:AboutUsComponent,canActivate:[],title:'AboutUs'},

]
  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    EbooksComponent,
    AboutUsComponent,
    ButomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [RecService],
  bootstrap: [AppComponent]
})
export class AppModule { }
