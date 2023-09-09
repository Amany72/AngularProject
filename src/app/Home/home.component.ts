import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app2';
  imgSrc:string='assets/images/avataaars.svg';
  imgWidth:number=300;
}
