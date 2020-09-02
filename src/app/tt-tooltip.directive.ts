import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core'

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[ttToolTip]',
})
// tslint:disable-next-line: class-name
export class ttTooltipDirective {

    @Input() toolTip: string;

    elToolTip: any;

    constructor(private elementRef: ElementRef,
        // tslint:disable-next-line: align
        private renderer: Renderer2) {
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        if (!this.elToolTip) { this.showHint(); }
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        if (this.elToolTip) { this.removeHint(); }
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
    }

    removeHint() {
        this.renderer.removeClass(this.elToolTip, 'tooltip');
        this.renderer.removeChild(document.body, this.elToolTip);
        this.elToolTip = null;
    }

    showHint() {

        this.elToolTip = this.renderer.createElement('span');
        const text = this.renderer.createText(this.toolTip);
        this.renderer.appendChild(this.elToolTip, text);

        this.renderer.appendChild(document.body, this.elToolTip);
        this.renderer.addClass(this.elToolTip, 'tooltip');

        // tslint:disable-next-line: prefer-const
        let hostPos = this.elementRef.nativeElement.getBoundingClientRect();
        // tslint:disable-next-line: prefer-const
        let tooltipPos = this.elToolTip.getBoundingClientRect();

        // tslint:disable-next-line: prefer-const
        let top = hostPos.bottom + 10;
        // tslint:disable-next-line: prefer-const
        let left = hostPos.left;

        this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
        this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
    }
}
