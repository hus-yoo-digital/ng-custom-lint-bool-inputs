import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-comp',
  standalone: true,
  template: `
    <div class="demo-comp">
      Demo Component - isActive: {{ isActive }} | isDisabled: {{ isDisabled }}
    </div>
  `,
})
export class DemoCompComponent {
  @Input() isActive = false;
  @Input() isDisabled = false;
}
