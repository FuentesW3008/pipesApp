import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'alfonso';
  public nameUpper: string = 'ALFONSO';
  public fullName: string = 'AlFoNsO FuEnTeS';

  public custonDate: Date = new Date();

}
