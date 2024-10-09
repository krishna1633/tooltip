import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TooltipComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tooltip';
}
