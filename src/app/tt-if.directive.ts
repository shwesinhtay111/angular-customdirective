import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[ttIf]'
})
// tslint:disable-next-line: class-name
export class ttIfDirective {

    // tslint:disable-next-line: variable-name
    _ttif: boolean;

    // tslint:disable-next-line: variable-name
    constructor(private _viewContainer: ViewContainerRef,
        // tslint:disable-next-line: align
        private templateRef: TemplateRef<any>) {
    }


    @Input()
    set ttIf(condition) {
        this._ttif = condition;
        this._updateView();
    }

    _updateView() {
        if (this._ttif) {
            this._viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this._viewContainer.clear();
        }
    }

}
