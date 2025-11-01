# ng custom lint

## Custom lint purpose

Working ng example of a custom lint rule, forcing boolean inputs to be shortanded.

### Examples

`<myComp [myBoolInput]="true"` must be `<myComp myBoolInput`

`<myComp [myBoolInput]="false"` must be `<myComp `

`<myComp [myBoolInput]="2+2===4"` is accepted

## Linting

Wrong code is yellow underlined in VScode, it can also be raises running : `npm run lint`

## Requirements

Inputs must be bool converted : 

`booleanAttribute @angular/core`

`BooleanInput @angular/cdk/coercion`

### Decorator

`@Input({ transform: booleanAttribute }) myInput: boolean = true;`

### Signal

`myInput = input<boolean, BooleanInput>(true, {transform: booleanAttribute,});`

### Exception

If a **required** boolean input needs to be false, no choice, `[myRequiredInput]="false"` must be written. Therefore boolean input should never be required.