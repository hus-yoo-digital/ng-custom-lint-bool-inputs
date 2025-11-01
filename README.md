# ng custom lint

## Custom lint purpose

Working ng example of a custom lint rule, forcing boolean inputs to be shortanded.
In aim to be added to `@yoo-digital/eslint-config-angular`

### Examples

`<myComp [myBoolInput]="true"` must be `<myComp myBoolInput`

`<myComp [myBoolInput]="false"` must be `<myComp `

`<myComp [myBoolInput]="2+2===4"` is accepted

## Requirements

Inputs must be bool converted : 

`booleanAttribute @angular/core`

`BooleanInput @angular/cdk/coercion`

### Decorator

`@Input({ transform: booleanAttribute }) myInput: boolean = true;`

### Signal

`myInput = input<boolean, BooleanInput>(true, {transform: booleanAttribute,});`