import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SharedModule } from './shared/shared.module';

//Configuración del local de  la app
import localEsCO from '@angular/common/locales/es-CO';
import localFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localEsCO );
registerLocaleData( localFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    SharedModule,
    RadioButtonModule

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
