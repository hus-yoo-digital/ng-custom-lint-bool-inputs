# NgCustomLintV2

## Custom lint purpose

In aim to be added to @yoo-digital/eslint-config-angular

Here a working example of a custom lint rule for Angular, forcing boolean inputs to be shortanded 

### Examples

`<myComp [myBoolInput]="true"` must be `<myComp myBoolInput`

`<myComp [myBoolInput]="false"` must be `<myComp `

`<myComp [myBoolInput]="2+2===4"` is accepted

## Requirements

Inputs, either old decorator or modern signal way must be bool converted : 

`booleanAttribute @angular/core`
`BooleanInput @angular/cdk/coercion`

### Decorator

`@Input({ transform: booleanAttribute }) myDecoratorBoolDefaultTrue: boolean = true;`

### Signal

`myBoolDefaultTrue = input<boolean, BooleanInput>(true, {transform: booleanAttribute,});`