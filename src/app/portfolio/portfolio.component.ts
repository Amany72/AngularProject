import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgSrc1:string='assets/images/poert1.png'

  imgSrc2:string='assets/images/port2.png'

  imgSrc3:string='assets/images/port3.png'
  imgAlt:string='portfolio image'
}
