import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './components/menu/menu.component';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    DockModule,
    RadioButtonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
