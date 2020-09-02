import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[ttClass]',
})
// tslint:disable-next-line: class-name
export class ttClassDirective implements OnInit {

    @Input() ttClass: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.classList.add(this.ttClass);
    }
}
