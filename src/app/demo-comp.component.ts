import { type BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, input } from '@angular/core';


@Component({
  selector: 'demo-comp',
  standalone: true,
  template: `
    <div class="demo-comp">
      Demo Component - isActive: {{ isActive() }} | isDisabled: {{ isDisabled() }}
    </div>
  `,
})
export class DemoCompComponent {
  // @Input() isActive = false;
  // @Input() isDisabled = false;


  isActive = input<boolean, BooleanInput>(true, {
    transform: booleanAttribute,
  });

  isDisabled = input<boolean, BooleanInput>(true, {
    transform: booleanAttribute,
  });


}
