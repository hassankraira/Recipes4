import { Ebooks } from './../../Ebooks';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrl: './ebooks.component.css'
})
export class EbooksComponent {
  ebooks:Ebooks[]=[
    new Ebooks("Student Cook Book","https://www.usu.edu/aggiewellness/files/USU-Student-Cookbook-FINAL-1.pdf","./assets/imges/b1.jpg"),
    new Ebooks("Easy Pleasy Cookbook","https://fis.carmarthenshire.gov.wales/wp-content/uploads/2018/12/easy-pleasy-cookbook.pdf","./assets/imges/b2.png"),
    new Ebooks("Curry Recipe Guide","https://assets.unileversolutions.com/v1/101908173.pdf","./assets/imges/b3.png"),
    new Ebooks("Budget friendly Recipe Guide","https://assets.unileversolutions.com/v1/110211283.pdf","./assets/imges/b4.png"),
    new Ebooks("Soups Recipe Book","https://assets.unileversolutions.com/v1/101896603.pdf","./assets/imges/b5.png"),
    new Ebooks("Pasta Recipe Guide","https://assets.unileversolutions.com/v1/110195022.pdf","./assets/imges/b6.png"),
    new Ebooks("Healthy Food Healthy Body","https://www.up.ac.za/media/shared/772/COPC/Informal%20Settlement%20Health/recipe-book-1.zp210082.pdf","./assets/imges/b7.png"),
    new Ebooks("The Community Dish","https://theopendoorpantry.org/wp-content/uploads/2022/09/Recipe-Book.pdf","./assets/imges/b8.png"),
    new Ebooks("Baking Magical Moments","https://www.fairybaking.com.au/wp-content/uploads/2019/04/Fairy-Cookbook-Final-Ebook-040416.pdf","./assets/imges/b9.png"),

  ]
  downlod(){
    return false
  }
}
