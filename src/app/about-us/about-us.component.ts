import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  Anchors:string[]=["WHO WE ARE",
    "COMMENTS",
    "PRODUCT REVIEWS",
    "CONTACT US",
    "WORK WITH US",
    "WRITE FOR US",
    "ADVERTISE WITH US"
  ]

}
