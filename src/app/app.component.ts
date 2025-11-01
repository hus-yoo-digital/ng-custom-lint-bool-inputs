import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoCompComponent } from './demo-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, DemoCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-custom-lint-v2';
    counter = 0;
}
