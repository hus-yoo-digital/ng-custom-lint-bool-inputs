import { type BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, Input, input } from '@angular/core';


@Component({
  selector: 'demo-comp',
  standalone: true,
  template: `
    <div class="demo-comp">
      Demo Component - isActive: {{ myBoolDefaultTrue() }} | isDisabled: {{ myBoolDefaultFalse() }}
    </div>
  `,
})
export class DemoCompComponent {
  @Input() myDecoratorBoolDefaultTrue = false;
  
  @Input() myDecoratorBoolDefaultFalse = false;

  myBoolDefaultTrue = input<boolean, BooleanInput>(true, {
    transform: booleanAttribute,
  });

  myBoolDefaultFalse = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });

  myBoolRequired = input.required<boolean, BooleanInput>({
    transform: booleanAttribute,
  });


}
