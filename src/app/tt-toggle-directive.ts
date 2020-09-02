import { Directive, ElementRef, Renderer2, Input, HostListener, HostBinding } from '@angular/core'

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[ttToggle]',
})
// tslint:disable-next-line: class-name
export class ttToggleDirective {

    private elementSelected = false;

    constructor(private el: ElementRef) {
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
    }

    @HostListener('click')
    private onClick() {
        this.elementSelected = !this.elementSelected;
        if (this.elementSelected) {
            this.el.nativeElement.classList.add('toggle');
        } else {
            this.el.nativeElement.classList.remove('toggle');
        }
    }

}
