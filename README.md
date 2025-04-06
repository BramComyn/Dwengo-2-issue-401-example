# Dwengo-2 Solution Proposal to issue #401

This repository serves as a standalone proposed solution for my [Bachelor's thesis project](https://github.com/SELab-2/Dwengo-2)
I didn't want to implement the proposed solution to [issue #401](https://github.com/SELab-2/Dwengo-2/issues/401) in the source code.

This way, each team member can have a clear view of what I am proposing, explained in here again:

## Recording



https://github.com/user-attachments/assets/cca0e37f-c115-41f6-8c4c-f6291af115dd



## Proposal

The application in the recording is structured as follows:

```
src
├── app
│   ├── app.component.html
│   ├── app.component.less
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── components
│   │   ├── error
│   │   ├── home
│   │   ├── student-wrapper
│   │   ├── teacher-wrapper
│   │   └── wrapper
│   └── services
│       ├── authentication.service.spec.ts
│       ├── authentication.service.ts
│       ├── usertype.service.spec.ts
│       └── usertype.service.ts
├── index.html
├── main.ts
└── styles.less

9 directories, 13 files
```

## Services

This example uses two services.
The `AuthenticationService` logs users in and out as their specific usertype
and allows other components to retrieve the usertype stored in the `localStorage` object.
The `UsertypeService` has a method to check whether a given user type corresponds to the one stored in `localStorage`
and will redirect to an `error` route if this isn't the case.

## Components

The main components of this example are the `WrapperComponent`, `TeacherWrapperComponent` and `StudentWrapperComponent`.
The `WrapperComponent` plays the role of our common component that we wish to reuse,
the `<UserType>WrapperComponent` then plays the role of the differentiated components we want to set to the specific routes.

### `WrapperComponent`

Using the input `userType`, which is required, we can check routing type against the logged in user type using the service.
In se, this implementation is all that is necessary to add to our components, together with updating the HTML-templates.

```ts
@Component({ ... })
export class WrapperComponent implements OnInit {
  @Input({ required: true, alias: 'user-type' }) userType!: 'student' | 'teacher';

  constructor(
    private usertypeService: UsertypeService,
    ...
  ) {}

  ...
  
  ngOnInit() {
    this.usertypeService.checkUserType(this.userType);
  }
}
```

### Updated HTML-template for `StudentWrapperComponent`

```html
<div class="student-content">
    <app-wrapper [user-type]="'student'"></app-wrapper>
</div>
```

### Updated HTML-template for `TeacherWrapperComponent`

```html
<div class="teacher-content">
    <app-wrapper [user-type]="'teacher'"></app-wrapper>
</div>
```
