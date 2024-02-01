import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-wizard-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard-2.component.html',
  styleUrl: './wizard-2.component.css'
})
export class Wizard2Component {
  @Input() currentIndex!:number;


}
