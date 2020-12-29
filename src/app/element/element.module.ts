import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { ElementComponent } from './element.component';



@NgModule({
  declarations: [ElementComponent],
  exports: [ElementComponent],
  imports: [
    CommonModule
  ]
})
export class ElementModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ElementComponent, { injector });
    customElements.define('element-component', customElement);
  }
}
