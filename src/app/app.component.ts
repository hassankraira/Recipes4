import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipes';
  constructor(private router:Router){}
  bb(){
    return false
  }
  static ele1:HTMLAnchorElement
  toutch(element1 : HTMLAnchorElement,authorElements:HTMLAnchorElement[]){
     AppComponent.ele1=element1
    element1.classList.add('aa')
   
    for(let i =0 ; i<authorElements.length;i++){
     authorElements[i].classList.remove('aa')
    }
  }
}
