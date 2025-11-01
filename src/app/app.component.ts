import { Component } from '@angular/core';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-custom-lint-v2';
  counter = 0;
  myBoolVar = true;
}
