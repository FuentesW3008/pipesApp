import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Alfonso';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female : 'invitarla'
  }

  changeClient(): void {
    this.name = 'Gabriela';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Alfonso', 'Miguel', 'Alejandro', 'Emiliano', 'Gabriela', 'Alexandra', 'Natalia'];
  public clientsMap = {
    '=0': 'No hay inversores esperando retiro de fondos!',
    '=1': 'Tenemos un inversor esperando retiro de fondos',
    '=2': 'Tenemos 2 inversores esperando retiro de fondos',
    'other': 'Tenemos # inversores esperando retiro de fondos'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue PiPe
  public person = {
    name: 'Alfonso',
    age: 40,
    address: 'Cúcuta - Colombia'
  }

  //Async PiPe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos Inversor.' )
    },3500)
  })


}
