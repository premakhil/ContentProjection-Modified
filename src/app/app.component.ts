import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wizard1Component } from './wizard-1/wizard-1.component';
import { Wizard2Component } from './wizard-2/wizard-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Wizard1Component,Wizard2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ModifiedWizard';
  // @Input() currentIndex!:number;
  public currentIndex!: number;

}
