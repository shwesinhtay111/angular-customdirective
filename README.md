Custom Directive
==================
custom attribute Directive
============================

- has several built-in attribute directives

- ttClass directive :: allow to add class to an element

- create a new file and name it as tt-class.directive.ts

- import necessary libraries:

	import { Directive, ElementRef, Input, OnInit } from '@angular/core'
  
- replace @Component decorator with @Directive decorator

      @Directive({
          selector: '[ttClass]',
      })
      export class ttClassDirective implements OnInit { }
      
- In app.module.ts,add custom directive as follow and import:

          declarations: [
                AppComponent,
                ttClassDirective
            ],
      -import { ttClassDirective } from './tt-class.directive';
      
- ElementRef is a wrapper for Parent DOM element

- access DOM element via property nativeElelment

- classList method allows us to add class to element

- Input decorator marks the property ttClass as the input property

	@Input() ttClass: string;
  
- will enable us to use the property binding syntax <button [ttClass]="'blue'"> in the component

- can create more than @Input properties

- three kinds of directive

	1)Attribute directive-(ngStyle,ngClass)
  
	2)Structural directive-(ngIf,ngSwitch,ngFor)
  
	3)Component
  
- manipulating the DOM, we need ViewContainerRef and TemplateRef instances

- easy to listen to the events from the parent or host element using the@HostListener function decorator


# CustomDirective

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
