import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  title = 'app2';
  bgRouterLink:Number|string='rgb(26, 188, 156)';
}
