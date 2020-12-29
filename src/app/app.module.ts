import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './element/element.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:      [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
