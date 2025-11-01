import { type BooleanInput } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, input } from '@angular/core';


@Component({
  selector: 'demo-comp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="demo-comp">
      <h2>
        Demo Component
      </h2> 
      <ul>
        <li>
          myDecoratorBoolDefaultTrue : {{myDecoratorBoolDefaultTrue | json}}
        </li>
        <li>
          myDecoratorBoolDefaultFalse : {{myDecoratorBoolDefaultFalse | json}}
        </li>
        <li>
          myBoolDefaultTrue : {{myBoolDefaultTrue() | json}}
        </li>
        <li>
          myBoolDefaultFalse : {{myBoolDefaultFalse() | json}}
        </li>
        <li>
          myBoolRequired : {{myBoolRequired() | json}}
        </li>
      </ul>
    </div>
  `,
})
export class DemoComponent {
  // Decorator style with explicit transform to support attribute presence shorthand
  @Input({ transform: booleanAttribute }) myDecoratorBoolDefaultTrue: boolean = true;

  @Input({ transform: booleanAttribute }) myDecoratorBoolDefaultFalse: boolean = false;

  // For stricter template type checking (attribute presence), optionally declare accepted types:
  // static ngAcceptInputType_myDecoratorBoolDefaultTrue: BooleanInput;
  // static ngAcceptInputType_myDecoratorBoolDefaultFalse: BooleanInput;

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
