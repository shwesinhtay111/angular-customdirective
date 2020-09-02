import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ttClassDirective } from './tt-class.directive';
import { ttIfDirective } from './tt-if.directive';
import { FormsModule } from '@angular/forms';
import { ttToggleDirective } from './tt-toggle-directive';
import { ttTooltipDirective } from './tt-tooltip.directive';


@NgModule({
  declarations: [
    AppComponent,
    ttClassDirective,
    ttIfDirective,
    ttToggleDirective,
    ttTooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
